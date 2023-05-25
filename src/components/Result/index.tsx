import { ResultIProps } from "../types"

const Result = ({correctAnswerGiven, song, artist}: ResultIProps) => {
    return(
        <div className="bg-white p-1">
            {correctAnswerGiven ? 
            <p>Congratulations {song} by {artist} was the correct answer!</p>:
            <p>Unlucky, {song} by {artist} was the correct answer</p>
            }
        </div>
    )
}

export default Result