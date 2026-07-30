'use client';

import { useState } from 'react';

export default function Navbar() {
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Función auxiliar para cerrar el menú al hacer clic en un enlace
  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-muebles-fondo/90 backdrop-blur-md text-muebles-crema z-50 border-b border-muebles-madera/20 shadow-md">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* Logo e Identidad a la izquierda */}
        <a href="#inicio" onClick={cerrarMenu} className="flex items-center space-x-3 group">
          <img 
            src="/logo.png" 
            alt="CB Muebles Logo" 
            className="h-12 w-12 object-contain rounded-md border border-muebles-oro/30 group-hover:scale-105 transition-transform"
          />
          <span className="font-black text-xl tracking-wider text-muebles-oro group-hover:text-muebles-crema transition-colors">
            CBMUEBLES
          </span>
        </a>

        {/* Índice de navegación tradicional (Solo visible en pantallas medianas/grandes: md) */}
        <div className="hidden md:flex items-center space-x-8 font-semibold text-sm">
          <a href="#inicio" className="hover:text-muebles-oro transition-colors">Inicio</a>
          <a href="#nosotros" className="hover:text-muebles-oro transition-colors">Quiénes Somos</a>
          <a href="#galeria" className="hover:text-muebles-oro transition-colors">Galería</a>
          <a href="#contacto" className="hover:text-muebles-oro transition-colors">Contacto</a>
        </div>

        {/* Botón de Hamburguesa (Solo visible en móviles: md:hidden) */}
        <button 
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="block md:hidden text-muebles-oro p-2 focus:outline-none focus:text-muebles-crema transition-colors"
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
        >
          {menuAbierto ? (
            // Icono de Cruz (X) cuando está abierto
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Icono de Hamburguesa (☰) cuando está cerrado
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </div>

      {/* Menú Desplegable Móvil (Aparece abajo del navbar al hacer clic en la hamburguesa) */}
      <div 
        className={`md:hidden absolute top-20 left-0 right-0 bg-stone-950/95 backdrop-blur-lg border-b border-muebles-madera/20 transition-all duration-300 ease-in-out origin-top ${
          menuAbierto 
            ? 'opacity-100 scale-y-100 max-h-screen visible' 
            : 'opacity-0 scale-y-95 max-h-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-5 px-6 py-6 font-bold text-base tracking-wide uppercase">
          <a href="#inicio" onClick={cerrarMenu} className="hover:text-muebles-oro transition-colors py-1">Inicio</a>
          <a href="#nosotros" onClick={cerrarMenu} className="hover:text-muebles-oro transition-colors py-1">Quiénes Somos</a>
          <a href="#galeria" onClick={cerrarMenu} className="hover:text-muebles-oro transition-colors py-1">Galería</a>
          <a href="#contacto" onClick={cerrarMenu} className="hover:text-muebles-oro transition-colors py-1">Contacto</a>
        </div>
      </div>
    </nav>
  );
}