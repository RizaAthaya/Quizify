import { useNavigate } from 'react-router-dom'
import { useQuizSettings } from '../../../context/QuizSettingsContext'
import Button from '../../shared/Button'

const QuizChallengeBox = () => {
    const { setSelectedDifficulty } = useQuizSettings()
    const navigate = useNavigate()

    const handleClick = () => { setSelectedDifficulty("hard"); navigate('/quiz') }

    return (
        <div className="w-full bg-white p-6 rounded-lg shadow-lg text-center flex flex-col xl:flex-row items-center justify-around">
            <div className="flex flex-col">
                <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-5">Are you a quiz master?</h2>
                <p className="text-base lg:text-lg text-gray-600 mb-6">Try to solve this random quiz!</p>
                <Button
                    variant="danger"
                    onClick={handleClick}
                    className="w-full py-3 text-white"
                >
                    Start Random Quiz
                </Button>
            </div>
            <img src="/src/assets/hard.svg" className="lg:block hidden max-w-sm py-6" />
        </div>
    )
}

export default QuizChallengeBox
