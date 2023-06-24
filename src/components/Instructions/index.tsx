const Instructions = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 lg:gap-8 w-full md:w-4/5 lg:w-3/5 p-4 lg:absolute lg:translate-y-24 bg-purple-400 z-10 rounded-lg text-xl lg:text-2xl border-4 border-solid border-white">
            <h3 className="underline text-4xl">How to play</h3>
            <ul className="flex flex-col gap-4">
                <li>Read through the lyrics displayed</li>
                <li>Enter a guess in the box provided</li>
                <li>Press 'Skip' if you do not want to guess at this point</li>
                <li>Press 'Check' to submit your guess</li>
                <li>More lyrics will appear</li>
                <li>Repeat the above process</li>
                <li>Your attempt will end if you either:</li>
                <li>- guess correctly</li>
                <li>- run out of guesses </li>
            </ul>
        </div>
    )
}

export default Instructions