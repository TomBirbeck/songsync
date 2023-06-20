type ScoreHistoryIprops = {
    attempts: number;
    completions: number;
    currentStreak: number;
    bestStreak: number
}

const ScoreHistory = ({attempts, completions, currentStreak, bestStreak} : ScoreHistoryIprops) => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 lg:gap-8 w-full lg:h-3/5 lg:w-1/4 p-4 md:absolute md:translate-y-1/4 bg-purple-400 opacity-1 z-10 rounded-lg text-xl lg:text-3xl">
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