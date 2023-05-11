const GuessForm = () => {
    return (
        <form className="w-full flex justify-center">
            <input placeholder="Enter a guess"></input>
            <button className="border-solid border-2 border-green-300 bg-green-400 w-2/5 rounded-md">Check</button>
        </form>
    )
}

export default GuessForm