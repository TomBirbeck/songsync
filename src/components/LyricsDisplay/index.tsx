import {useEffect, useState} from 'react';
import { lyricsProps } from '../types';

const LyricsDisplay = ({lyrics, guessIndex}: lyricsProps) => {
    const [display, setDisplay] = useState('')
    const splitLyrics = lyrics.split(' ').filter((word) => word.length > 0)
    const lyricLength = (index: number) => {
        return splitLyrics.slice(0, (index + 1) * 5)
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