import {FaCheck, FaTimes} from 'react-icons/fa'
import { PreviousGuessItemIprops } from '../types'

const PreviousGuessItem = ({guess, answer, guessNumber} : PreviousGuessItemIprops) => {
    console.log(guess)
    return (
<div className="flex">
<p className="w-1/2 text-center">{guess}</p>{guess ===`Guess ${guessNumber}` ? <span></span> : guess.toLowerCase() === answer.toLowerCase() ? <span className="w-1/2 text-xl flex items-center justify-center text-green-600"><FaCheck/></span> : <span className="w-1/2 text-xl flex items-center justify-center text-red-600"><FaTimes/></span>}
</div>
    )
}

export default PreviousGuessItem