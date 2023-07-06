import CountDownTimer from "../CountDownTimer"
import { ResultIProps } from "../types"

const Result = ({correctAnswerGiven, song, artist}: ResultIProps) => {
    return(
        <div className="bg-purple-200 p-2 w-10/12 rounded-lg text-xl font-semibold text-center md:w-1/2 mt-4 flex flex-col gap-2">
            {correctAnswerGiven ? 
            <p>Congratulations! <span className="font-black">{song}</span> by <span className="font-black">{artist}</span> was the correct answer.</p>:
            <p>Unlucky, <span className="font-black">{song}</span> by <span className="font-black">{artist}</span> was the correct answer</p>
            }
            <CountDownTimer/>
        </div>
    )
}

export default Result