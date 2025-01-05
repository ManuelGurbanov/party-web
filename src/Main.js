import AOS from 'aos';
import 'aos/dist/aos.css';

import BgVideo from './BgVideo';
import { useEffect, useRef } from 'react';
import Nav from './Nav';

export default function Main() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <BgVideo />
      <div className="sm:w-3/4 w-screen min-h-screen flex flex-col items-center justify-center text-white p-5 z-30">
        <h2
          className="sm:text-left text-center w-full text-4xl text-kenchyellow italic"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          BIENVENIDO A
        </h2>
        <h1
          className="sm:text-left text-center w-full text-7xl text-kenchred font-bold italic drop-shadow-lg shadow-yellow-300"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          FIESTA KENCH
        </h1>
      </div>
    </>
  );
}
