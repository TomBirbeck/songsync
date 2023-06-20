const Instructions = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 h-3/4 w-3/4 md:w-1/2 p-4 md:absolute md:translate-y-1/4 bg-purple-400 z-10 rounded-lg text-xl md:text-3xl">
            <h3 className="underline">How to play</h3>
            <ul className="dashed">
                <li>Have a read of the lyrics displayed</li>
                <li>Enter a guess in the box provided</li>
                <li>Or press 'Skip' if you do not have a guess at this point</li>
                <li>Press 'Check' to submit your guess</li>
                <li>More lyrics will appear</li>
                <li>Repeat the above process</li>
            </ul>
        </div>
    )
}

export default Instructions