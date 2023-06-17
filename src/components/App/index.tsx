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
  const [guessList, setGuessList] = useState( JSON.parse(localStorage.getItem("songSyncGuesses")!) ||
    {guess1: 'Guess 1',
    guess2: 'Guess 2',
    guess3: 'Guess 3',
    guess4: 'Guess 4',
    guess5: 'Guess 5'},
  );
  const [guessIndex, setGuessIndex] = useState<number>(Number(localStorage.getItem('guess-index')) || 0);
  const [progress, setProgress] = useState(localStorage.getItem('status') || 'playing');

  // localStorage.setItem('status', 'playing');
  // localStorage.setItem('guess-index', '0');
  // const songSync = {guess1: 'Guess 1', guess2: "Guess 2", guess3: "Guess 3", guess4: "Guess 4", guess5: "Guess 5" };
  // localStorage.setItem('songSyncGuesses', JSON.stringify(songSync));


  const updateProgress = (progress: any) => {
    const today = new Date;
    const todayDateString = `${today.getDate()}-${today.getMonth()}-${today.getFullYear()}`;
    const songSync = {guess1: guessList.guess1, guess2: guessList.guess2, guess3: guessList.guess3, guess4: guessList.guess4, guess5: guessList.guess5 };
    localStorage.setItem('songSyncGuesses', JSON.stringify(songSync));
    localStorage.setItem("status", progress);
    localStorage.setItem("game-date", todayDateString);
    localStorage.setItem("guess-index", `${guessIndex}`);
  }

  const checkForProgress = () => {
    const status = localStorage.getItem("status");
    const guessIndex = localStorage.getItem("guess-index");
    if (status && guessIndex){
      setGuessIndex(Number(guessIndex));
      setProgress(status);
      const GuessesInStorage = localStorage.getItem("songSyncGuesses");
      if (GuessesInStorage){
      setGuessList(JSON.parse(GuessesInStorage))
      }
    }
  }

  const checkDate = () => {
    const today = new Date;
    const todayDateString = `${today.getDate()}-${today.getMonth()}-${today.getFullYear()}`
    const dateInStorage = localStorage.getItem("game-date");
    const statusInStorage = localStorage.getItem("status");
    const GuessIndexInStorage = Number(localStorage.getItem("guess-index"));
    const GuessesInStorage = localStorage.getItem("songSyncGuesses");
    if (GuessesInStorage){
      setGuessList(JSON.parse(GuessesInStorage));
    }
    if (todayDateString === dateInStorage){
      if (statusInStorage === "playing"){
        setGuessIndex(GuessIndexInStorage);
      }
      else if (statusInStorage === "passed"){
        setCorrectAnswerGiven(true);
      }
      else if (statusInStorage === 'failed'){
        setGuessIndex(5)
      }
    } else {
      setProgress("playing");
      localStorage.setItem("status", "playing");
      localStorage.setItem("game-date", todayDateString);
      localStorage.setItem("guess-index", '0');
      const songSync = {guess1: 'Guess 1', guess2: "Guess 2", guess3: "Guess 3", guess4: "Guess 4", guess5: "Guess 5" };
      localStorage.setItem('songSyncGuesses', JSON.stringify(songSync));
    }
  }

  const getSong = async () => {
    // const res = await fetch(`http://localhost:3001/todayssong`);
    const res = await fetch(`https://song-sync-server.onrender.com/todayssong`);
    const data = await res.json();
    const songInfo = data.payload;
    setAnswer(songInfo[0].name);
    setSong({song: songInfo[0].name, artist: songInfo[0].artist, lyrics: songInfo[0].lyrics});
}

useEffect(() => {
    getSong();
    checkDate();
    checkForProgress();
  },[]);
  
useEffect(() => {
  updateProgress(progress);
},[guessIndex, progress]);

return (
    <div className="min-h-screen h-full w-full bg-gray-950 flex flex-col items-center p-2 gap-4">
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
     setProgress={setProgress}
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
