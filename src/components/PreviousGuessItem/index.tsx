import { PreviousGuessItemIprops } from '../types'

const PreviousGuessItem = ({guess, answer, guessNumber} : PreviousGuessItemIprops) => {
    return (
<div className="flex">
<p className="w-1/2 text-center">{guess}</p>{guess ===`Guess ${guessNumber}` ? <span></span> : guess.toLowerCase() === answer.toLowerCase() ? <div className="w-1/2 flex items-center justify-center"><span className='rounded-lg h-3 w-1/2 bg-green-600'></span></div> : <div className="w-1/2 flex items-center justify-center"><span className='rounded-lg h-3 w-1/2 bg-red-600'></span></div>}
</div>
    )
}

export default PreviousGuessItem