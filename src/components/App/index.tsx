import {useState} from 'react'
import Button from "../Button"
import GuessForm from "../GuessForm"
import PreviousGuesses from "../PreviousGuesses"

function App() {
  const [guessList, setGuessList] = useState({
    guessOne: 'Guess 1',
    guessTwo: 'Guess 2',
    guessThree: 'Guess 3',
    guessFour: 'Guess 4',
    guessFive: 'Guess 5',
  })

  return (
    <div className="h-screen w-screen bg-black flex flex-col items-center p-2">
     <h1 className="text-rose-300">Song Sync</h1>
     <PreviousGuesses guesses={guessList}/>
     <GuessForm/>
     <Button name='Skip'/>
    </div>
  )
}

export default App
