import {useState, useEffect} from 'react'
import GuessForm from "../GuessForm"
import PreviousGuesses from "../PreviousGuesses"
import Header from '../Header'
import LyricsDisplay from '../LyricsDisplay'
import Result from '../Result'
import randomNum from '../utils/getRandomNum'
import songList from '../utils/data'

function App() {
  const [correctAnswerGiven, setCorrectAnswerGiven] = useState(false);
  const [answer, setAnswer] = useState<string>('')
  const [song, setSong] = useState({song: '', artist: '', lyrics: ''});
  const [guessList, setGuessList] = useState(
    {guess1: 'Guess 1',
    guess2: 'Guess 2',
    guess3: 'Guess 3',
    guess4: 'Guess 4',
    guess5: 'Guess 5'},
  );
  const [guessIndex, setGuessIndex] = useState(0);

  useEffect(() => {
    const songNum = randomNum();
    const selectedSong = songList[songNum];
    setSong(selectedSong);
    setAnswer(selectedSong.song);
  },[])


  return (
    <div className="h-screen w-screen bg-black flex flex-col items-center p-2 gap-4">
     <Header/>
     {song.lyrics.length > 1 &&
     <LyricsDisplay lyrics={song.lyrics} guessIndex={guessIndex}/>
     }
     <PreviousGuesses guesses={guessList} answer={answer}/>
     {!correctAnswerGiven && guessIndex < 5 ?
     <GuessForm
     guessList={guessList}
     setGuessList={setGuessList}
     answer={answer}
     guessIndex={guessIndex}
     setGuessIndex={setGuessIndex}
     setCorrectAnswerGiven={setCorrectAnswerGiven}
     /> : null
    }
        {
          correctAnswerGiven || !correctAnswerGiven && guessIndex === 5 ? 
          <Result correctAnswerGiven={correctAnswerGiven} song={song.song} artist={song.artist}/> : null
        }
    </div>
  )
}

export default App
