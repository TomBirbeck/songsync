import {useEffect, useState} from 'react';
import { lyricsProps } from '../types';

const LyricsDisplay = ({lyrics, guessIndex}: lyricsProps) => {
    const [display, setDisplay] = useState<string[]>(['']);
    const splitLyrics = lyrics.split(',');
    const lyricLength = (index: number) => {
        return splitLyrics.slice(0, index + 1)
    }
    useEffect(() => {
        setDisplay(lyricLength(guessIndex));
    }, [guessIndex])
    return (
        <div className="min-h-[14rem] w-10/12 md:w-1/2 mb-4 flex flex-col gap-2">
            {display.map((lyric, index) => { 
                return (
                    <div className='bg-gray-900 rounded-lg text-center' key={index}>
                        <p className="text-white text-lg md:text-2xl">{lyric}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default LyricsDisplay