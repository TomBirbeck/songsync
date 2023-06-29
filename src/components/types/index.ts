export type GuessIProps = {
    guesses: {
        guess1: string;
        guess2: string;
        guess3: string;
        guess4: string;
        guess5: string;
        guess6: string;
    };
    answer: string;
}

export type FormIProps = {
    guessList: {
        guess1: string;
        guess2: string;
        guess3: string;
        guess4: string;
        guess5: string;
        guess6: string;
    };
    setGuessList: React.Dispatch<React.SetStateAction<{
        guess1: string;
        guess2: string;
        guess3: string;
        guess4: string;
        guess5: string;
        guess6: string;
    }>>;
    answer: string;
    guessIndex: number;
    setGuessIndex: React.Dispatch<React.SetStateAction<number>>;
    setCorrectAnswerGiven: React.Dispatch<React.SetStateAction<boolean>>;
    setProgress: React.Dispatch<React.SetStateAction<string>>;
}

export type ResultIProps = {
    correctAnswerGiven: boolean;
    song: string;
    artist: string;
}

export type lyricsProps = {
    lyrics: string;
    guessIndex: number;
}

export type ButtonProps = {
    name: string;
}

export type PreviousGuessItemIprops = {
    guess: string;
    answer: string;
    guessNumber: number;
    }

export type NavIProps = {
        scoreHistoryToggle: boolean;
        setScoreHistoryToggle: React.Dispatch<React.SetStateAction<boolean>>;
        gameInfoToggle: boolean;
        setGameInfoToggle: React.Dispatch<React.SetStateAction<boolean>>;
        setPlayerHistory: React.Dispatch<React.SetStateAction<{}>>;
    }