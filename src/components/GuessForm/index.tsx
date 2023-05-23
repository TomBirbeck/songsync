import { useState, ChangeEvent} from "react"
import Button from "../Button";
import { FormIProps } from "../types";

const GuessForm = ({guessList, setGuessList, answer, guessIndex, setGuessIndex}: FormIProps) => {
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
        setGuessIndex(guessIndex+=1)
        setGuess('')
        handleCheck(guess, answer || '')
    }

    const handleCheck = (guess: string, answer: string) => {
        if (guess.toLowerCase() === answer.toLowerCase()){
            console.log('correct');
        } else {
            console.log('incorrect');
        }
    }

    return (
        <>
        <form className="w-full flex flex-col justify-center items-center gap-2" onSubmit={handleSubmit}>
            <input
            className="px-1 rounded-md w-10/12"
            placeholder="Enter a guess"
            onChange={handleGuess}></input>
            <button className="border-solid border-2 border-green-300 bg-green-400 w-2/5 rounded-md">Check</button>
            <Button name={'Skip'}/>
        </form>
        </>
    )
}

export default GuessForm