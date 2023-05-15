export type GuessIProps = {
    guesses: {
        guess1: string;
        guess2: string;
        guess3: string;
        guess4: string;
        guess5: string;
    }
}

export type FormIProps = {
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

export type ButtonProps = {
    name: string;
}