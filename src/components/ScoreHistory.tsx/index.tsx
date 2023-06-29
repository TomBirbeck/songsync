import CountDownTimer from "../CountDownTimer";

type ScoreHistoryIprops = {
    attempts: number;
    completions: number;
    currentStreak: number;
    bestStreak: number;
    setScoreHistoryToggle: React.Dispatch<React.SetStateAction<boolean>>;
    windowSize: number;
}

const ScoreHistory = ({attempts, completions, currentStreak, bestStreak, setScoreHistoryToggle, windowSize} : ScoreHistoryIprops) => {

      if (windowSize > 820){
          return (
          <div className="hidden lg:absolute w-full h-full lg:flex justify-center items-center -m-2">
            <div className="hidden lg:block bg-black opacity-70 lg:absolute w-full h-full z-10" onClick={() => {setScoreHistoryToggle(false)}}>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 lg:gap-8 w-full lg:h-4/5 md:w-4/5 lg:w-1/3 p-4 bg-purple-400 opacity-1 z-30 rounded-lg text-xl lg:text-2xl border-4 border-solid border-white">
                <h3 className="underline text-4xl">Your Stats</h3>
                <div className="flex flex-col gap-4">
                <p>Attempted Songs: <span>{attempts}</span></p>
                <p>Correct Guesses: <span>{completions}</span></p>
                <p>Current streak: <span>{currentStreak}</span></p>
                <p>Best Streak: <span>{bestStreak}</span></p>
                </div>
            <CountDownTimer/>
            </div>
            </div>
        );
                    } else {
                        return (
                            <div className="flex flex-col justify-center items-center gap-4 lg:gap-8 w-full lg:h-4/5 md:w-4/5 lg:w-1/4 p-4 bg-purple-400 opacity-1 z-30 rounded-lg text-xl lg:text-2xl border-4 border-solid border-white">
                                <h3 className="underline text-4xl">Your Stats</h3>
                                <div className="flex flex-col gap-4">
                                <p>Attempted Songs: <span>{attempts}</span></p>
                                <p>Correct Guesses: <span>{completions}</span></p>
                                <p>Current streak: <span>{currentStreak}</span></p>
                                <p>Best Streak: <span>{bestStreak}</span></p>
                                </div>
                                <CountDownTimer/>
                        </div>
                        )
                    }

}

export default ScoreHistory;

                        
     
