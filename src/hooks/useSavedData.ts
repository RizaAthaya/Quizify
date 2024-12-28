import { handleDecrypt } from "../utils/hash";

const useSavedData = () => {
    const datas = localStorage.getItem("quizify_data") as string;
    const savedData = handleDecrypt(datas) ;

    return {
        token: savedData?.token || undefined,
        num: savedData?.num || 0,
        score: savedData?.score || 0,
        amount: savedData?.amount || 10,
        category: savedData?.category || 0,
        difficulty: savedData?.difficulty || 'any',
        type: savedData?.type || 'any',
        questions: savedData?.questions || [],
    };
};

export default useSavedData