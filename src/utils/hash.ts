import forge from 'node-forge';

const secretKey = import.meta.env.VITE_ENCRYPT_KEY;

const keyBytes = forge.util.createBuffer(forge.md.sha256.create().update(secretKey).digest());

export const handleEncrypt = (data: Record<string, any>) => {
    const cipher = forge.cipher.createCipher('AES-CBC', keyBytes);
    const iv = forge.random.getBytesSync(16); // AES 
    cipher.start({ iv });
    cipher.update(forge.util.createBuffer(JSON.stringify(data)));
    cipher.finish();
    const encrypted = forge.util.encode64(iv + cipher.output.getBytes());
    return encrypted;
};

export const handleDecrypt = (data: string) => {
    try {
        const encryptedBytes = forge.util.decode64(data);
        const iv = encryptedBytes.slice(0, 16);
        const encryptedData = encryptedBytes.slice(16);

        const decipher = forge.cipher.createDecipher('AES-CBC', keyBytes);
        decipher.start({ iv });
        decipher.update(forge.util.createBuffer(encryptedData));
        decipher.finish();

        const decrypted = decipher.output.toString();
        return JSON.parse(decrypted);
    } catch (error) {
        console.error('Decryption error:', error);
        return {
            token: undefined,
            num: 0,
            score: 0,
            totalQuestion: 10,
            amount: 10,
            category: 0,
            difficulty: 'any',
            type: 'any',
            questions: [],
        };
    }
};
