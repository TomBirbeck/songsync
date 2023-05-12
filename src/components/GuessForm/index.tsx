import { useState, ChangeEvent, DetailedHTMLProps, ButtonHTMLAttributes } from "react"

interface FormIProps {
    guessList: {guess: string;}[];
    setGuessList: React.Dispatch<React.SetStateAction<{guess: string}[]>>;
}

const GuessForm = ({guessList, setGuessList}: FormIProps) => {
    const [guessIndex, setGuessIndex] = useState(0);
    const [guess, setGuess] = useState('')


    
    const handleGuess = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setGuess(e.target.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // console.log([...guessList, guessList[guessIndex], {...guessList[guessIndex], guess: guess}]);
        // setGuessList([...guessList, {...guessList[guessIndex], guess: guess}]);
    }

    console.log(guessList)

    return (
        <form className="w-full flex justify-center" onSubmit={handleSubmit}>
            <input placeholder="Enter a guess" onChange={handleGuess}></input>
            <button className="border-solid border-2 border-green-300 bg-green-400 w-2/5 rounded-md" type="submit">Check</button>
        </form>
    )
}

export default GuessForm