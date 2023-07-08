import {useEffect, useState} from 'react';
import { lyricsProps } from '../types';

const LyricsDisplay = ({lyrics, guessIndex}: lyricsProps) => {
    const [display, setDisplay] = useState<string[]>(['']);
    const splitLyrics = lyrics.split(',');
    console.log(splitLyrics);
    const lyricLength = (index: number) => {
        return splitLyrics.slice(0, index + 1)
    }
    useEffect(() => {
        setDisplay(lyricLength(guessIndex));
    }, [guessIndex])
    return (
        <div className="min-h-[16rem] w-10/12 md:w-3/4 lg:w-1/2 mb-4 flex flex-col gap-2">
            {display.map((lyric, index) => { 
                return (
                    <div className='bg-slate-800 rounded-lg text-center' key={index}>
                        <p className="text-white text-lg md:text-2xl py-1 select-none">{lyric}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default LyricsDisplay