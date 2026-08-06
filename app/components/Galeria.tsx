'use client';

import { useState } from 'react';
import muebles from '../muebles.json';

// Definimos la estructura del objeto Mueble para TypeScript
interface Mueble {
  id: number;
  titulo: string;
  categoria: string;
  descripcion: string;
  imagen: string;
}

export default function Galeria() {
  // Le aclaramos a TypeScript que el estado puede ser un Mueble o null
  const [imagenSeleccionada, setImagenSeleccionada] = useState<Mueble | null>(null);

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-stone-800">Nuestros Trabajos</h2>
        <p className="text-stone-600 mt-2">Una muestra de los proyectos que diseñamos e instalamos.</p>
      </div>

      {/* Grilla Responsiva */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {muebles.map((mueble) => (
          <div 
            key={mueble.id} 
            className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => setImagenSeleccionada(mueble)}
          >
            {/* Contenedor de la Imagen */}
            <div className="h-64 w-full bg-stone-200 relative group">
              <img 
                src={mueble.imagen} 
                alt={mueble.titulo}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-3 left-3 bg-amber-800 text-white text-xs font-semibold px-2.5 py-1 rounded-full z-10">
                {mueble.categoria}
              </span>
              
              {/* Overlay visual */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white/90 text-stone-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                  Ver foto
                </span>
              </div>
            </div>

            {/* Texto de la tarjeta */}
            <div className="p-5">
              <h3 className="text-xl font-bold text-stone-800">{mueble.titulo}</h3>
              <p className="mt-2 text-stone-600 text-sm">{mueble.descripcion}</p>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL / LIGHTBOX */}
      {imagenSeleccionada && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 transition-all"
          onClick={() => setImagenSeleccionada(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón para cerrar (X) */}
            <button 
              onClick={() => setImagenSeleccionada(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/80 text-white w-9 h-9 rounded-full flex items-center justify-center transition-colors text-lg font-bold"
            >
              ✕
            </button>

            {/* Imagen Ampliada */}
            <div className="max-h-[75vh] w-full bg-stone-900 flex items-center justify-center">
              <img 
                src={imagenSeleccionada.imagen} 
                alt={imagenSeleccionada.titulo}
                className="max-h-[75vh] w-full object-contain"
              />
            </div>

            {/* Detalles debajo de la foto amplia */}
            <div className="p-6 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="inline-block bg-amber-800 text-white text-xs font-semibold px-2.5 py-1 rounded-full mb-2">
                  {imagenSeleccionada.categoria}
                </span>
                <h3 className="text-2xl font-bold text-stone-800">{imagenSeleccionada.titulo}</h3>
                <p className="text-stone-600 text-sm mt-1">{imagenSeleccionada.descripcion}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}