const useSavedQuizData = () => {
    const savedData = JSON.parse(localStorage.getItem("quizData") || "{}");

    return {
        token: savedData.token || undefined,
        num: savedData.num || 0,
        score: savedData.score || 0,
        totalQuestion: savedData.totalQuestion || 10,
        amount: savedData.amount || 10,
        category: savedData.category || 0,
        difficulty: savedData.difficulty || 'any',
        type: savedData.type || 'any',
    };
};

export default useSavedQuizData;
