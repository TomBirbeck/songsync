import {useState, useEffect} from 'react';

const CountDownTimer = () => {
    const date = new Date;
    const [timer, setTimer] = useState<[number, number, number]>([0,0,0]);
    const [CurrentTime, setCurrentTime] = useState<[number, number, number]>([date.getHours(), date.getMinutes(), date.getSeconds()]);
    const midnight = [23, 60, 60];

    const countDown = () => {
        setTimer([midnight[0]-CurrentTime[0], midnight[1]-CurrentTime[1], midnight[2]-CurrentTime[2]]);
    }
    
    useEffect(() => {
        setCurrentTime([date.getHours(), date.getMinutes(), date.getSeconds()]);
        const newTime = setInterval(countDown, 1000);
        return () => clearInterval(newTime);
    },[timer])
    
    return (
        <div className='lg:w-3/4 text-center bg-purple-300 rounded-lg p-4 self-center'>
           <p>Time until next Songsmith: <span>{timer![0]}h {timer![1]}m {timer![2]}s</span></p> 
        </div>
    )
}

export default CountDownTimer;