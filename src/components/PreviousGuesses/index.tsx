import { GuessIProps } from "../types"

const PreviousGuesses = ({guesses}: GuessIProps) => {
    return (
        <div className="bg-white w-10/12">
        <div className="flex justify-around">
            <p>{guesses.guess1}</p><span>X</span>
        </div>
        <div className="flex justify-around">
            <p>{guesses.guess2}</p><span>X</span>
        </div>
        <div className="flex justify-around">
            <p>{guesses.guess3}</p><span>X</span>
        </div>
        <div className="flex justify-around">
            <p>{guesses.guess4}</p><span>X</span>
        </div>
        <div className="flex justify-around">
            <p>{guesses.guess5}</p><span>X</span>
        </div>
        </div>
    )
}

export default PreviousGuesses