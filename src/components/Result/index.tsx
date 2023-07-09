import CountDownTimer from "../CountDownTimer"
import { ResultIProps } from "../types"

const Result = ({correctAnswerGiven, song, artist}: ResultIProps) => {
    return(
        <div className="bg-purple-200 p-2 w-10/12 md:w-3/4 lg:w-1/2 rounded-lg text-xl text-center mt-4 flex flex-col gap-2">
            {correctAnswerGiven ? 
            <p>Congratulations! <span className="font-bold">{song}</span> by <span className="font-bold">{artist}</span> was the correct answer.</p>:
            <p>Unlucky, <span className="font-bold">{song}</span> by <span className="font-bold">{artist}</span> was the correct answer</p>
            }
            <CountDownTimer/>
        </div>
    )
}

export default Result