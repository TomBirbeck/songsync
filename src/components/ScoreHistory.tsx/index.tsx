import { useState } from "react";

const ScoreHistory = () => {
    const [playerHistory, setPlayerHistory] = useState({attempts: 0, completions: 0, currentStreak: 0, bestStreak: 0})
    return (
        <div className="flex flex-col justify-center items-center gap-4 h-3/4 md:w-1/2 md:absolute md:translate-y-1/4 bg-purple-400 z-10 rounded-lg text-3xl">
            <h3 className="underline text-4xl">Your Stats</h3>
            <div className="flex flex-col gap-4">
            <p>Attempted Songs: <span>{playerHistory.attempts}</span></p>
            <p>Correct Guesses: <span>{playerHistory.completions}</span></p>
            <p>Current streak: <span>{playerHistory.currentStreak}</span></p>
            <p>Best Streak: <span>{playerHistory.bestStreak}</span></p>
            </div>
        </div>
    );
}

export default ScoreHistory;