import sjcl from 'sjcl';

const secretKey = import.meta.env.VITE_ENCRYPT_KEY;

// Handle encryption with sjcl
export const handleEncrypt = (data: Record<string, any>) => {
    const encrypted = sjcl.encrypt(secretKey, JSON.stringify(data));
    return encrypted;
};

// Handle decryption with sjcl
export const handleDecrypt = (data: string) => {
    try {
        const decrypted = sjcl.decrypt(secretKey, data);
        return JSON.parse(decrypted);
    } catch (error) {
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
