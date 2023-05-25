export type GuessIProps = {
    guesses: {
        guess1: string;
        guess2: string;
        guess3: string;
        guess4: string;
        guess5: string;
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
    };
    setGuessList: React.Dispatch<React.SetStateAction<{
        guess1: string;
        guess2: string;
        guess3: string;
        guess4: string;
        guess5: string;
    }>>;
    answer: string;
    guessIndex: number;
    setGuessIndex: React.Dispatch<React.SetStateAction<number>>;
    setCorrectAnswerGiven: React.Dispatch<React.SetStateAction<boolean>>;
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