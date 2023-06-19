type ScoreHistoryIprops = {
    attempts: number;
    completions: number;
    currentStreak: number;
    bestStreak: number
}

const ScoreHistory = ({attempts, completions, currentStreak, bestStreak} : ScoreHistoryIprops) => {
    //player makes guess or skips
    //local storage will be updated about attempts but only oncee per day
    //completions
    // update the current streak or best streak if answer changes them
    return (
        <div className="flex flex-col justify-center items-center gap-4 h-3/4 md:w-1/2 md:absolute md:translate-y-1/4 bg-purple-400 z-10 rounded-lg text-3xl">
            <h3 className="underline text-4xl">Your Stats</h3>
            <div className="flex flex-col gap-4">
            <p>Attempted Songs: <span>{attempts}</span></p>
            <p>Correct Guesses: <span>{completions}</span></p>
            <p>Current streak: <span>{currentStreak}</span></p>
            <p>Best Streak: <span>{bestStreak}</span></p>
            </div>
        </div>
    );
}

export default ScoreHistory;