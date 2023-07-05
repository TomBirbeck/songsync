import {useState, useEffect} from 'react';
import GuessForm from "../GuessForm";
import PreviousGuesses from "../PreviousGuesses";
import LyricsDisplay from '../LyricsDisplay';
import Result from '../Result';
import ScoreHistory from '../ScoreHistory.tsx';
import NavBar from '../Navbar/index.tsx';
import Instructions from '../Instructions/index.tsx';

function App() {
  const [correctAnswerGiven, setCorrectAnswerGiven] = useState(false);
  const [answer, setAnswer] = useState<string>('')
  const [song, setSong] = useState({song: '', artist: '', lyrics: ''});
  const [guessList, setGuessList] = useState( JSON.parse(localStorage.getItem("songSyncGuesses")!) ||
    {guess1: 'Guess 1',
    guess2: 'Guess 2',
    guess3: 'Guess 3',
    guess4: 'Guess 4',
    guess5: 'Guess 5',
    guess6: 'Guess 6',}
  );
  const [guessIndex, setGuessIndex] = useState<number>(Number(localStorage.getItem('guess-index')) || 0);
  const [progress, setProgress] = useState(localStorage.getItem('status') || 'playing');
  const [gameInfoToggle, setGameInfoToggle] = useState(false);
  const [scoreHistoryToggle, setScoreHistoryToggle] = useState(false);
  const [playerHistory, setPlayerHistory] = useState(JSON.parse(localStorage.getItem('playerHistory')!) || {attempts: 0, completions: 0, currentStreak: 0, bestStreak: 0, lastUpdated: new Date});
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

  // localStorage.setItem('status', 'playing');
  // localStorage.setItem('guess-index', '0');
  // const songSync = {guess1: 'Guess 1', guess2: "Guess 2", guess3: "Guess 3", guess4: "Guess 4", guess5: "Guess 5", guess6: "Guess 6" };
  // localStorage.setItem('songSyncGuesses', JSON.stringify(songSync));
  // const playerHistoryfake = {attempts: 0, completions: 0, currentStreak: 0, bestStreak: 0, lastUpdated: new Date};
  // localStorage.setItem ('playerHistory', JSON.stringify(playerHistoryfake));
  // console.log( JSON.parse(localStorage.getItem('playerHistory')!));

  const checkForSong = () => {
    const songAlreadyExists = localStorage.getItem('todaysSong');
    const today = new Date;
    const todayDateString = `${today.getDate()}-${today.getMonth()}-${today.getFullYear()}`;
    if (!songAlreadyExists){
      getSong();
    } else if (songAlreadyExists) {
      const songToday = JSON.parse(songAlreadyExists);
      if (songToday.date === todayDateString) {
        setSong({song: songToday.song, artist: songToday.artist, lyrics: songToday.lyrics});
        setAnswer(songToday.song);
      } else {
        getSong();
      }
    }
  }

  const checkForPlayer = () => {
    const player = localStorage.getItem('playerHistory');
    if (!player){
      const newPlayerHistory = {attempts: 0, completions: 0, currentStreak: 0, bestStreak: 0, lastUpdated: new Date};
      localStorage.setItem('playerHistory', JSON.stringify(newPlayerHistory));
    } 
  }


  const updateProgress = (progress: any) => {
    const today = new Date;
    const todayDateString = `${today.getDate()}-${today.getMonth()}-${today.getFullYear()}`;
    const songSync = {guess1: guessList.guess1, guess2: guessList.guess2, guess3: guessList.guess3, guess4: guessList.guess4, guess5: guessList.guess5, guess6: guessList.guess6 };
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
      setGuessList(JSON.parse(GuessesInStorage));
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
      const songSync = {guess1: 'Guess 1', guess2: "Guess 2", guess3: "Guess 3", guess4: "Guess 4", guess5: "Guess 5", guess6: "Guess 6" };
      localStorage.setItem('songSyncGuesses', JSON.stringify(songSync));
    }
  }

  const getSong = async () => {
    const url = import.meta.env.VITE_API_URL
    // const res = await fetch(`${url}`);
    const res = await fetch(`${url}`, {
      headers: { "authorization": `Bearer ${import.meta.env.VITE_API_TOKEN}`},
    });
    // const res = await fetch('http://localhost:3001/todayssong', {
    //   headers: { "authorization": `Bearer ${import.meta.env.VITE_API_TOKEN}`},
    // })
    const data = await res.json();
    const songInfo = data.payload;
    setAnswer(songInfo[0].name);
    setSong({song: songInfo[0].name, artist: songInfo[0].artist, lyrics: songInfo[0].lyrics});
    const today = new Date;
    const todayDateString = `${today.getDate()}-${today.getMonth()}-${today.getFullYear()}`;
    const songUpdate = {song: songInfo[0].name, artist: songInfo[0].artist, lyrics: songInfo[0].lyrics, date:todayDateString};
    localStorage.setItem('todaysSong', JSON.stringify(songUpdate));
}

useEffect(()=>{
  const handleResizeWindow = () => setWindowSize(window.innerWidth);
  // subscribe to window resize event "onComponentDidMount"
  window.addEventListener("resize", handleResizeWindow);
  return () => {
    // unsubscribe "onComponentDestroy"
    window.removeEventListener("resize", handleResizeWindow);
  };
},[])

useEffect(() => {
    checkForPlayer();
    checkForSong();
    checkDate();
    checkForProgress();
  },[]);
  
useEffect(() => {
  updateProgress(progress);
},[guessIndex, progress]);

return (
  <div className="min-h-screen bg-gray-950 flex flex-col items-center p-2 gap-4 box-border">
      <NavBar
      scoreHistoryToggle={scoreHistoryToggle}
      setScoreHistoryToggle={setScoreHistoryToggle}
      gameInfoToggle={gameInfoToggle}
      setGameInfoToggle={setGameInfoToggle}
      setPlayerHistory={setPlayerHistory}
      />
      {scoreHistoryToggle && <ScoreHistory attempts={playerHistory.attempts} completions={playerHistory.completions} currentStreak={playerHistory.currentStreak} bestStreak={playerHistory.bestStreak} setScoreHistoryToggle={setScoreHistoryToggle} windowSize={windowSize}/>}
      {gameInfoToggle && <Instructions setGameInfoToggle={setGameInfoToggle} windowSize={windowSize}/>}
     {song.lyrics.length > 1 ?
     <LyricsDisplay lyrics={song.lyrics} guessIndex={guessIndex}/> : 
     <div
      className="inline-block self-center h-16 w-16 animate-spin rounded-full border-4 border-solid border-purple-400 border-r-transparent"
      role="status">
    </div>
     }
     <PreviousGuesses guesses={guessList} answer={answer}/>
     {!correctAnswerGiven && guessIndex < 6 ?
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
          correctAnswerGiven || !correctAnswerGiven && guessIndex === 6 ? 
          <Result correctAnswerGiven={correctAnswerGiven} song={song.song} artist={song.artist}/> : null
        }
    </div>
  )
}

export default App
