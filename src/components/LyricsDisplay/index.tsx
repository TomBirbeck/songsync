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
        <div className="h-2/5 w-10/12 md:w-1/2 mb-6">
            {display.map((lyric, index) => { 
                return (
                <p className="text-white text-xl md:text-4xl" key={index}>{lyric}</p>
                )
            })}
        </div>
    )
}

export default LyricsDisplay