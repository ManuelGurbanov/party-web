import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import BarraLibre from './BarraLibre';
import ProximosEventos from './ProximosEventos';
import Nav from './Nav';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <div className='max-w-screen overflow-x-hidden min-h-screen flex flex-col items-center justify-center z-30'>
      <Main />
      <ProximosEventos/>
      <BarraLibre/>
    </div>
  </React.StrictMode>
);

