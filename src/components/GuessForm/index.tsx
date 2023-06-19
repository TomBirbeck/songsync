import { useState, ChangeEvent, FormEvent} from "react"
import Button from "../Button";
import { FormIProps } from "../types";

const GuessForm = ({guessList, setGuessList, answer, guessIndex, setGuessIndex, setCorrectAnswerGiven, setProgress}: FormIProps) => {
    const [guess, setGuess] = useState('');
    
    const handleGuess = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setGuess(e.target.value);
    }
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (guessIndex < 5){
            if (guessIndex === 0){
                const today = new Date;
                const todayDateString = `${today.getDate()}-${today.getMonth()}-${today.getFullYear()}`;
                const playerHistory = JSON.parse(localStorage.getItem('playerHistory')!);
                const playerHistoryLastPlayed = new Date (playerHistory.lastUpdated);
                const playerHistoryLastPlayedString = `${playerHistoryLastPlayed.getDate()}-${playerHistoryLastPlayed.getMonth()}-${playerHistoryLastPlayed.getFullYear()}`;
                if (playerHistoryLastPlayedString !== todayDateString){
                    const newHistory = {...playerHistory, lastUpdated: today};
                    localStorage.setItem('playerHistory', JSON.stringify(newHistory));
                }
                if(guess === ''){
                    setGuessList({...guessList, guess1: 'Passed'});
                } else {
                    setGuessList({...guessList, guess1 : guess});
                }
            } else if (guessIndex === 1){
                if(guess === ''){
                    setGuessList({...guessList, guess2: 'Passed'});
                } else {
                    setGuessList({...guessList, guess2 : guess});
                }
            } else if (guessIndex === 2){
                if(guess === ''){
                    setGuessList({...guessList, guess3: 'Passed'});
                } else {
                    setGuessList({...guessList, guess3 : guess});
                }
            } else if (guessIndex === 3){
                if(guess === ''){
                    setGuessList({...guessList, guess4: 'Passed'});
                } else {
                    setGuessList({...guessList, guess4 : guess});
                }
            } else if (guessIndex === 4){
                if(guess === ''){
                    setGuessList({...guessList, guess5: 'Passed'});
                } else {
                    setGuessList({...guessList, guess5 : guess});
                }
            }
            setGuessIndex(guessIndex+=1);
            setGuess('');
            handleCheck(guess, answer || '');
        }
    }

    const handleCheck = (guess: string, answer: string) => {
        if (guess.toLowerCase() === answer.toLowerCase()){
            setCorrectAnswerGiven(true);
            localStorage.setItem('status', 'passed');
            setProgress('passed');
        } else {
            if (guessIndex === 4){
                localStorage.setItem('status', 'failed');
                setProgress('failed');
                setCorrectAnswerGiven(false);
            } else {
                setCorrectAnswerGiven(false);
            }
        }
    }

    return (
        <form className="w-full flex flex-col justify-center items-center gap-4" onSubmit={handleSubmit}>
            <input
            className="bg-stone-200 p-2 rounded-md w-10/12 md:w-1/2"
            placeholder="Enter a guess"
            value={guess}
            onChange={handleGuess}>   
            </input>
            <div className="w-full flex justify-center gap-3">
            <button className="bg-green-400 w-2/5 rounded-md md:w-1/5 text-xl hover:bg-purple-400">Check</button>
            <Button name={'Skip >>'}/> 
            </div>
        </form>
    )
}

export default GuessForm