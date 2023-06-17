const ScoreHistory = () => {
    return (
        <div className="h-3/4 w-1/2 md:absolute md:translate-y-1/4 bg-red-300 z-10">
            <h3>Stats</h3>
            <p>Attempts: <span>1</span></p>
            <p>completions: <span>1</span></p>
            <p>Current streak: <span>1</span></p>
            <p>Best Streak: <span>2</span></p>
        </div>
    );
}

export default ScoreHistory;