import React from 'react';

export default function BgVideo() {

    return (
        <>
        <video
        autoPlay
        loop
        muted
        className='absolute top-0 left-0 z-0 w-screen h-screen object-cover'
        >
        <source src="/bg-video.mkv" type='video/mp4' />
        </video>

        <div className='absolute top-0 left-0 z-30 w-full overflow-x-hidden min-h-screen bg-black bg-opacity-80'>

        </div>
        </>
    );
}