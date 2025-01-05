import React from 'react';

export default function ProximosEventos() {
    return (
        <div className='w-screen h-[70vh] flex flex-col items-center justify-center text-white p-5 bg-party2'>
            <h2 className='text-center w-full sm:text-3xl text-xl text-white italic' data-aos="fade-up" data-aos-delay="100">
                PRÓXIMO EVENTO
            </h2>
            <h1 className='text-center w-full sm:text-9xl text-6xl text-kenchyellow font-bold italic' data-aos="fade-up" data-aos-delay="250">
                <span className='text-kenchred'>12/1</span> CAIX
            </h1>
            <a className='text-center w-full sm:text-4xl text-xl text-white italic underline' data-aos="fade-up" data-aos-delay="400"
            href='#'>
                TICKETS
            </a>
        </div>
    );
}