interface GuessIProps {
    guesses: {
        guessOne: string,
        guessTwo: string,
        guessThree: string,
        guessFour: string,
        guessFive: string,
    }
}

const PreviousGuesses = ({guesses}: GuessIProps) => {
    return (
        <div className="bg-white w-10/12">
        <div className="flex justify-around">
            <p>{guesses.guessOne}</p><span>X</span>
        </div>
        <div className="flex justify-around">
            <p>{guesses.guessTwo}</p><span>X</span>
        </div>
        <div className="flex justify-around">
            <p>{guesses.guessThree}</p><span>X</span>
        </div>
        <div className="flex justify-around">
            <p>{guesses.guessFour}</p><span>X</span>
        </div>
        <div className="flex justify-around">
            <p>{guesses.guessFive}</p><span>X</span>
        </div>
        </div>
    )
}

export default PreviousGuesses