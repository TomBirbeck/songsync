import {useState, useEffect} from 'react';
import GuessForm from "../GuessForm";
import PreviousGuesses from "../PreviousGuesses";
import Header from '../Header';
import LyricsDisplay from '../LyricsDisplay';
import Result from '../Result';

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
  const [progress, setProgress] = useState('passed')

  const updateProgress = (progress: any) => {
    const d = new Date;
    const today = `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`
    localStorage.setItem("status", progress);
    localStorage.setItem("game-date", today);
    const status = localStorage.getItem("status");
    const gameDate = localStorage.getItem("game-date");
    console.log(status, gameDate);
  }

  const checkDate = () => {
    const d = new Date;
    const today = `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`
    const dateInStorage = localStorage.getItem("game-date");
    const statusInStorage = localStorage.getItem("status");
    if (today === dateInStorage){
      if (statusInStorage !== "failed"){
        console.log("game on")
      }
      if (statusInStorage === "passed"){
        console.log("winner")
      } else {
        console.log("failed")
      }
    } else {
      setProgress("ongoing");
      localStorage.setItem("status", "ongoing");
      localStorage.setItem("game-date", today);
      console.log("different date")
    }
  }

  const getSong = async () => {
    const res = await fetch(`http://localhost:3001/todayssong`);
    const data = await res.json();
    const songInfo = data.payload;
    setAnswer(songInfo[0].name);
    setSong({song: songInfo[0].name, artist: songInfo[0].artist, lyrics: songInfo[0].lyrics});
}

useEffect(() => {
    getSong();
    checkDate();
    // updateProgress(progress);
  },[]);

return (
    <div className="min-h-screen h-full w-full bg-black flex flex-col items-center p-2 gap-4">
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
