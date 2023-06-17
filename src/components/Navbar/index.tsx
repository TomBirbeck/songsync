import {HiOutlineInformationCircle, HiPresentationChartLine} from 'react-icons/hi';
import Header from '../Header';

type NavIProps = {
    scoreHistoryToggle: boolean;
    setScoreHistoryToggle: React.Dispatch<React.SetStateAction<boolean>>;
    gameInfoToggle: boolean;
    setGameInfoToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar = ({scoreHistoryToggle, setScoreHistoryToggle, gameInfoToggle, setGameInfoToggle}: NavIProps) => {

    const handleScoreHistoryToggle = () => {
        if(gameInfoToggle){
            setGameInfoToggle(false);
        }
        setScoreHistoryToggle(!scoreHistoryToggle);
    }
    const handleGameInfoToggle = () => {
        if(scoreHistoryToggle){
            setScoreHistoryToggle(false);
        }
        setGameInfoToggle(!gameInfoToggle);
    }

    return (
        <nav className='w-full flex text-purple-400 text-5xl justify-around md:justify-center md:gap-44'>
           <button onClick={handleScoreHistoryToggle}>
                <HiPresentationChartLine/>
            </button>
           <Header/>
           <button onClick={handleGameInfoToggle}>
            <HiOutlineInformationCircle/>
           </button>
        </nav>
    )
}

export default NavBar;