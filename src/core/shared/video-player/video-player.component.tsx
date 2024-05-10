import Image from 'next/image';
import React, { useState } from 'react'
import { IVideoPlayer } from './video-player';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });



const VodeoPlayer = ({ img, className, url , playIcon}: IVideoPlayer) => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const handlePlay = () => {
        setIsVideoPlaying(true);
    };

    const handlePause = () => {
        setIsVideoPlaying(false);
    };

    return (
        <ReactPlayer
            className={className}
            controls={true}
            onPlay={handlePlay}
            onPause={handlePause}
            width="100%"
            height="100%"
            playIcon={playIcon}
            light={<Image src={img} alt='Thumbnail' />}
            // light={isVideoPlaying == false
            //     ? <Image src={img} alt='Thumbnail' />
            //     : false}
            url={url} />
    );
}

export default VodeoPlayer