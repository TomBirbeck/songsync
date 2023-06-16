import PreviousGuessItem from "../PreviousGuessItem"
import { GuessIProps } from "../types"
// import {FaCheck, FaTimes} from 'react-icons/fa'

const PreviousGuesses = ({guesses, answer}: GuessIProps) => {
    return (
        <div className="bg-white w-10/12 md:w-1/2 py-1 rounded-lg text-lg">
        {/* <div className="flex">
            <p className="w-1/2 text-center">{guesses.guess1}</p>{guesses.guess1 ==='Guess 1' ? <span></span> : guesses.guess1.toLowerCase() === answer.toLowerCase() ? <span className="w-1/2 text-xl flex items-center justify-center text-green-600"><FaCheck/></span> : <span className="w-1/2 text-xl flex items-center justify-center text-red-600"><FaTimes/></span>}
        </div>
        <div className="flex">
            <p className="w-1/2 text-center">{guesses.guess2}</p>{guesses.guess2 ==='Guess 2' ? <span></span> : guesses.guess2.toLowerCase() === answer.toLowerCase() ? <span className="w-1/2 text-xl flex items-center justify-center text-green-600"><FaCheck/></span> : <span className="w-1/2 text-xl flex items-center justify-center text-red-600"><FaTimes/></span>}
        </div>
        <div className="flex">
            <p className="w-1/2 text-center">{guesses.guess3}</p>{guesses.guess3 ==='Guess 3' ? <span></span> : guesses.guess3.toLowerCase() === answer.toLowerCase() ? <span className="w-1/2 text-xl flex items-center justify-center text-green-600"><FaCheck/></span> : <span className="w-1/2 text-xl flex items-center justify-center text-red-600"><FaTimes/></span>}
        </div>
        <div className="flex">
            <p className="w-1/2 text-center">{guesses.guess4}</p>{guesses.guess4 ==='Guess 4' ? <span></span> : guesses.guess4.toLowerCase() === answer.toLowerCase() ? <span className="w-1/2 text-xl flex items-center justify-center text-green-600"><FaCheck/></span> : <span className="w-1/2 text-xl flex items-center justify-center text-red-600"><FaTimes/></span>}
        </div>
        <div className="flex">
            <p className="w-1/2 text-center">{guesses.guess5}</p>{guesses.guess5 ==='Guess 5' ? <span></span> : guesses.guess5.toLowerCase() === answer.toLowerCase() ? <span className="w-1/2 text-xl flex items-center justify-center text-green-600"><FaCheck/></span> : <span className="w-1/2 text-xl flex items-center justify-center text-red-600"><FaTimes/></span>}
        </div> */}
        <PreviousGuessItem guess={guesses.guess1} guessNumber={1} answer={answer}/>
        <PreviousGuessItem guess={guesses.guess2} guessNumber={2} answer={answer}/>
        <PreviousGuessItem guess={guesses.guess3} guessNumber={3} answer={answer}/>
        <PreviousGuessItem guess={guesses.guess4} guessNumber={4} answer={answer}/>
        <PreviousGuessItem guess={guesses.guess5} guessNumber={5} answer={answer}/>
        </div>
    )
}

export default PreviousGuesses