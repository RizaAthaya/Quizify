export const handleEncrypt = (data: Record<string, any>) => {
    if (data === null || data === undefined) {
        return '';  
    }

    const jsonString = JSON.stringify(data);

    const encodedData = btoa(unescape(encodeURIComponent(jsonString)));
    return encodedData;
};

export const handleDecrypt = (encodedData: string) => {
    try {
        if (!encodedData) {
            return null;
        }

        const decodedData = decodeURIComponent(escape(atob(encodedData)));

        return JSON.parse(decodedData);
    } catch (error) {
        console.error('Decryption error:', error);
        return null; 
    }
};
