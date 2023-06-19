import {HiOutlineInformationCircle, HiPresentationChartLine} from 'react-icons/hi';
import Header from '../Header';
import {useState} from 'react';
import { NavIProps } from '../types';

const NavBar = ({scoreHistoryToggle, setScoreHistoryToggle, gameInfoToggle, setGameInfoToggle, setPlayerHistory}: NavIProps) => {

    const getPlayerHistory = () => {
        setPlayerHistory(JSON.parse(localStorage.getItem('playerHistory')!));
      }

    const handleScoreHistoryToggle = () => {
        if(gameInfoToggle){
            setGameInfoToggle(false);
        }
        setScoreHistoryToggle(!scoreHistoryToggle);
        getPlayerHistory();
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