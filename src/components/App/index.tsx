import {useState, useEffect} from 'react'
import GuessForm from "../GuessForm"
import PreviousGuesses from "../PreviousGuesses"
import Header from '../Header'
import LyricsDisplay from '../LyricsDisplay'

function App() {
  const [correctAnswerGiven, setCorrectAnswerGiven] = useState(false);
  const [answer, setAnswer] = useState<string>('')
  const [song, setSong] = useState(
    {
      artist: 'Chuck Berry',
      song: 'Johnny B. Goode', 
      lyrics: 
      `Deep down in Louisiana, close to New Orleans
      Way back up in the woods among the evergreens
      There stood a log cabin made of earth and wood
      Where lived a country boy named Johnny B. Goode
      Who never ever learned to read or write so well
      But he could play the guitar just a-ringin' a bell
      Go, go
      Go, Johnny, go, go
      Go, Johnny, go, go
      Go, Johnny, go, go
      Go, Johnny, go, go
      Johnny B. Goode
      He used to carry his guitar in a gunny sack
      Go sit beneath the trees by the railroad track
      Oh, the engineers would see him sittin' in the shade
      Strummin' with the rhythm that the drivers made
      People passing by, they would stop and say
      "Oh my, but that little country boy could play"
      Go, go
      Go, Johnny, go, go
      Go, Johnny, go, go
      Go, Johnny, go, go
      Go, Johnny, go, go
      Johnny B. Goode
      His mother told him, "Someday you will be a man
      And you will be the leader of a big ol' band
      Many people coming from miles around
      To hear you play your music when the sun go down
      Maybe someday your name will be in lights
      Saying Johnny B. Goode tonight"
      Go, go
      Go, Johnny, go
      Go, go, go, Johnny, go
      Go, go, go, Johnny, go
      Go, go, go, Johnny, go
      Go
      Johnny B. Goode`
    }
  );
  const [guessList, setGuessList] = useState(
    {guess1: 'Guess 1',
    guess2: 'Guess 2',
    guess3: 'Guess 3',
    guess4: 'Guess 4',
    guess5: 'Guess 5'},
  );
  const [guessIndex, setGuessIndex] = useState(0);
  useEffect(() => {
    setAnswer(song.song)
  },[])

  return (
    <div className="h-screen w-screen bg-black flex flex-col items-center p-2 gap-4">
     <Header/>
     <LyricsDisplay lyrics={song.lyrics} guessIndex={guessIndex}/>
     <PreviousGuesses guesses={guessList} answer={answer}/>
     <GuessForm
        guessList={guessList}
        setGuessList={setGuessList}
        answer={answer}
        guessIndex={guessIndex}
        setGuessIndex={setGuessIndex}
        correctAnswerGiven={correctAnswerGiven}
        setCorrectAnswerGiven={setCorrectAnswerGiven}
        />
    </div>
  )
}

export default App
