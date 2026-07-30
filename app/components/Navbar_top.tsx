export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-muebles-fondo/90 backdrop-blur-md text-muebles-crema z-50 border-b border-muebles-madera/20 shadow-md">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* Logo e Identidad a la izquierda */}
        <a href="#inicio" className="flex items-center space-x-3 group">
          <img 
            src="/logo.png" 
            alt="CB Muebles Logo" 
            className="h-12 w-12 object-contain rounded-md border border-muebles-oro/30 group-hover:scale-105 transition-transform"
          />
          <span className="font-black text-xl tracking-wider text-muebles-oro group-hover:text-muebles-crema transition-colors">
            CBMUEBLES
          </span>
        </a>

        {/* Índice de navegación a la derecha */}
        <div className="flex items-center space-x-8 font-semibold text-sm">
          <a href="#inicio" className="hover:text-muebles-oro transition-colors">Inicio</a>
          <a href="#nosotros" className="hover:text-muebles-oro transition-colors">Quiénes Somos</a>
          <a href="#galeria" className="hover:text-muebles-oro transition-colors">Galería</a>
          <a href="#contacto" className="hover:text-muebles-oro transition-colors">Contacto</a>
        </div>

      </div>
    </nav>
  );
}