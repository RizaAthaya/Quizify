import CryptoJS from 'crypto-js'

const secretKey = import.meta.env.VITE_ENCRYPT_KEY

export const handleEncrypt = (data: Record<string, any>) => {
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
    return encrypted
};

export const handleDecrypt = (data: string) => {
    try {
        const bytes = CryptoJS.AES.decrypt(data, secretKey);
        const decrypted = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        return decrypted;
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
