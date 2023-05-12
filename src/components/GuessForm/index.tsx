import { useState, ChangeEvent} from "react"

interface FormIProps {
    guessList: {
        guess1: string;
        guess2: string;
        guess3: string;
        guess4: string;
        guess5: string;
    }
    setGuessList: React.Dispatch<React.SetStateAction<{
        guess1: string;
        guess2: string;
        guess3: string;
        guess4: string;
        guess5: string;
    }>>;
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
        if (guessIndex === 0){
            setGuessList({...guessList, guess1 : guess});
        } else if (guessIndex === 1){
            setGuessList({...guessList, guess2 : guess});
        } else if (guessIndex === 2){
            setGuessList({...guessList, guess3 : guess});
        } else if (guessIndex === 3){
            setGuessList({...guessList, guess4 : guess});
        } else if (guessIndex === 4){
            setGuessList({...guessList, guess5 : guess});
        }
        setGuessIndex((prev) => prev+=1)
        setGuess('')
    }

    return (
        <form className="w-full flex justify-center" onSubmit={handleSubmit}>
            <input placeholder="Enter a guess" onChange={handleGuess}></input>
            <button className="border-solid border-2 border-green-300 bg-green-400 w-2/5 rounded-md" type="submit">Check</button>
        </form>
    )
}

export default GuessForm