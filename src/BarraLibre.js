import React, { useState, useEffect } from 'react';

export default function BarraLibre() {
    const texts = ["BARRA LIBRE", "SOLD OUT GROOVE", "FOTÓGRAFOS", "REGALOS", "SORPRESAS", "DJ EN VIVO"];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [texts.length]);

    return (
        <div className='w-screen sm:min-h-screen h-[50vh] flex flex-col items-center justify-center text-white p-5 bg-party'>
            <h2
                className='text-center w-full sm:text-4xl text-xl text-kenchyellow italic'
                data-aos="fade-up"
                data-aos-delay="100"
            >
                ¿POR QUÉ VENIR A KENCH?
            </h2>
            <h1
                className='text-center w-full sm:text-7xl text-3xl text-white font-bold italic transition-all duration-1000 opacity-100 transform scale-100'
                key={currentTextIndex}
                data-aos="fade-up"
                data-aos-delay="100"
            >
                {texts[currentTextIndex]}
            </h1>
        </div>
    );
}
