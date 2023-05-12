interface GuessIProps {
    guesses: {guess: string}[]
}

const PreviousGuesses = ({guesses}: GuessIProps) => {
    return (
        <div className="bg-white w-10/12">
        <div className="flex justify-around">
            <p>{guesses[0].guess}</p><span>X</span>
        </div>
        <div className="flex justify-around">
            <p>{guesses[1].guess}</p><span>X</span>
        </div>
        <div className="flex justify-around">
            <p>{guesses[2].guess}</p><span>X</span>
        </div>
        <div className="flex justify-around">
            <p>{guesses[3].guess}</p><span>X</span>
        </div>
        <div className="flex justify-around">
            <p>{guesses[4].guess}</p><span>X</span>
        </div>
        </div>
    )
}

export default PreviousGuesses