import { GuessIProps } from "../types"

const PreviousGuesses = ({guesses, answer}: GuessIProps) => {
    return (
        <div className="bg-white w-10/12 md:w-1/2">
        <div className="flex justify-around">
            <p>{guesses.guess1}</p>{guesses.guess1 ==='Guess 1' ? <span></span> : guesses.guess1 === answer? <span>Y</span> : <span>X</span>}
        </div>
        <div className="flex justify-around">
            <p>{guesses.guess2}</p>{guesses.guess2 ==='Guess 2' ? <span></span> : guesses.guess2 === answer? <span>Y</span> : <span>X</span>}
        </div>
        <div className="flex justify-around">
            <p>{guesses.guess3}</p>{guesses.guess3 ==='Guess 3' ? <span></span> : guesses.guess3 === answer? <span>Y</span> : <span>X</span>}
        </div>
        <div className="flex justify-around">
            <p>{guesses.guess4}</p>{guesses.guess4 ==='Guess 4' ? <span></span> : guesses.guess4 === answer? <span>Y</span> : <span>X</span>}
        </div>
        <div className="flex justify-around">
            <p>{guesses.guess5}</p>{guesses.guess5 ==='Guess 5' ? <span></span> : guesses.guess5 === answer? <span>Y</span> : <span>X</span>}
        </div>
        </div>
    )
}

export default PreviousGuesses