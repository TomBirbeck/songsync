import {useState} from 'react'
import GuessForm from "../GuessForm"
import PreviousGuesses from "../PreviousGuesses"
import Header from '../Header'
import LyricsDisplay from '../LyricsDisplay'

function App() {
  const [answer, setAnswer] = useState<string>('')
  const [guessList, setGuessList] = useState(
    {guess1: 'Guess 1',
    guess2: 'Guess 2',
    guess3: 'Guess 3',
    guess4: 'Guess 4',
    guess5: 'Guess 5'},
  )

  return (
    <div className="h-screen w-screen bg-black flex flex-col items-center p-2 gap-4">
     <Header/>
     <LyricsDisplay/>
     <PreviousGuesses guesses={guessList}/>
     <GuessForm guessList={guessList} setGuessList={setGuessList} answer={answer}/>
    </div>
  )
}

export default App
