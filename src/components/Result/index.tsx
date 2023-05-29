import { ResultIProps } from "../types"

const Result = ({correctAnswerGiven, song, artist}: ResultIProps) => {
    return(
        <div className="bg-white p-2 w-10/12 rounded-lg text-lg text-center md:w-1/2">
            {correctAnswerGiven ? 
            <p>Congratulations {song} by {artist} was the correct answer!</p>:
            <p>Unlucky, {song} by {artist} was the correct answer</p>
            }
        </div>
    )
}

export default Result