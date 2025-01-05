import React from 'react';

export default function ScrollComponent({ scrollToRef }) {
  // Función que desplaza la vista al contenedor 'BarraLibre'
  const handleScroll = () => {
    if (scrollToRef.current) {
      // Verifica si scrollToRef es válido antes de intentar hacer scroll
      scrollToRef.current.scrollIntoView({
        behavior: 'smooth', // Animación suave
        block: 'start', // Desplazarse al inicio del contenedor
      });
    } else {
      console.warn('Referencia no válida', scrollToRef);
    }
  };

  return (
    <div
      onClick={handleScroll}
      className="w-full h-16 bg-blue-500 flex items-center justify-center text-white cursor-pointer"
    >
      <h2>Haz clic para ir a Barra Libre</h2>
    </div>
  );
}
