import { ResultIProps } from "../types"

const Result = ({correctAnswerGiven, song, artist}: ResultIProps) => {
    return(
        <div className="bg-purple-200 p-2 w-10/12 rounded-lg text-xl font-semibold text-center md:w-1/2 mt-4">
            {correctAnswerGiven ? 
            <p>Congratulations! {song} by {artist} was the correct answer.</p>:
            <p>Unlucky, {song} by {artist} was the correct answer</p>
            }
        </div>
    )
}

export default Result