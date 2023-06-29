import {useState, useEffect} from 'react';

const CountDownTimer = () => {
    const date = new Date;
    const [timer, setTimer] = useState<[number, number, number]>([0,0,0]);
    const [time, setTime] = useState<[number, number, number]>([date.getHours(), date.getMinutes(), date.getSeconds()]);
    const midnight = [23, 60, 60];

    const countDown = () => {
        setTimer([midnight[0]-time[0], midnight[1]-time[1], midnight[2]-time[2]]);
    }
    
    useEffect(() => {
        setTime([date.getHours(), date.getMinutes(), date.getSeconds()]);
        const newTime = setInterval(countDown, 1000);
        return () => clearInterval(newTime);
    },[timer])
    
    return (
        <div className='w-3/4 md:w-5/6 lg:w-3/4 text-center bg-purple-300 rounded-lg p-4'>
           <p>Time until next SongSmith: <span>{timer![0]} : {timer![1]} : {timer![2]}</span></p> 
        </div>
    )
}

export default CountDownTimer;