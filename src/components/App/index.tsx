import {useState} from 'react'
import Button from "../Button"
import GuessForm from "../GuessForm"
import PreviousGuesses from "../PreviousGuesses"

function App() {
  const [guessList, setGuessList] = useState(
    {guess1: 'Guess 1',
    guess2: 'Guess 2',
    guess3: 'Guess 3',
    guess4: 'Guess 4',
    guess5: 'Guess 5'},
  )

  return (
    <div className="h-screen w-screen bg-black flex flex-col items-center p-2">
     <h1 className="text-rose-300">Song Sync</h1>
     <PreviousGuesses guesses={guessList}/>
     <GuessForm guessList={guessList} setGuessList={setGuessList}/>
     <Button name='Skip'/>
    </div>
  )
}

export default App
