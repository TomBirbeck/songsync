import {useEffect, useState} from 'react';
import { lyricsProps } from '../types';

const LyricsDisplay = ({lyrics, guessIndex}: lyricsProps) => {
    const [display, setDisplay] = useState('')
    const splitLyrics = lyrics.split(' ')
    const lyricLength = (index: number) => {
        if (index === 0){
            return splitLyrics.slice(0, 5)
        }
        else return splitLyrics.slice(0, 10)
    }
    useEffect(() => {
        setDisplay(lyricLength(guessIndex).join(' '));
    }, [guessIndex])
    return (
        <div className="h-2/5 w-10/12">
            <p className="text-white">
              {display}
            </p>
        </div>
    )
}

export default LyricsDisplay