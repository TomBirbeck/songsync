import Button from "../Button"
import GuessForm from "../GuessForm"

function App() {

  return (
    <div className="h-screen w-screen bg-black flex flex-col justify-center items-center p-2">
     <h1 className="text-rose-300">Song Sync</h1>
     <GuessForm/>
     <Button name='Skip'/>
    </div>
  )
}

export default App
