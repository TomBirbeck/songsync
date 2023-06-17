import PreviousGuessItem from "../PreviousGuessItem"
import { GuessIProps } from "../types"

const PreviousGuesses = ({guesses, answer}: GuessIProps) => {
    return (
        <div className="bg-white w-10/12 md:w-1/2 py-1 rounded-lg text-lg">
        <PreviousGuessItem guess={guesses.guess1} guessNumber={1} answer={answer}/>
        <PreviousGuessItem guess={guesses.guess2} guessNumber={2} answer={answer}/>
        <PreviousGuessItem guess={guesses.guess3} guessNumber={3} answer={answer}/>
        <PreviousGuessItem guess={guesses.guess4} guessNumber={4} answer={answer}/>
        <PreviousGuessItem guess={guesses.guess5} guessNumber={5} answer={answer}/>
        </div>
    )
}

export default PreviousGuesses