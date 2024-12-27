import { useQuiz } from "../../context/QuizContext";

const QuestionQuiz = () => {
  const { questions } = useQuiz();

  return (
    <div>
      QuestionQuiz
    </div>
  )
}

export default QuestionQuiz
