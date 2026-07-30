import Navbar from './components/Navbar_top';
import QuienesSomos from './components/QuienesSomos'; // Importamos la sección nueva
import Galeria from './components/Galeria';
import Contacto from './components/Contacto';
import BotonWhatsapp from './components/BotonWhatsapp';

export default function Home() {
  return (
    <main className="min-h-screen relative pt-20 scroll-smooth">
      
      <Navbar />

      {/* 1. Hero Section (Inicio) - Ahora un toque más compacto */}
      <section id="inicio" className="flex flex-col items-center justify-center text-center py-20 px-4 bg-muebles-fondo border-b-4 border-muebles-madera">
        <img 
          src="/logo.png" 
          alt="CB Muebles" 
          className="w-44 h-44 mb-6 object-contain rounded-xl shadow-2xl border-2 border-muebles-oro/50 transform hover:scale-102 transition-transform"
        />

        <h1 className="text-5xl font-black text-muebles-oro tracking-tight uppercase">
          CBMUEBLES
        </h1>
        <p className="mt-4 text-xl text-muebles-crema/90 max-w-lg font-medium">
          Muebles a medida y diseños personalizados de calidad. Por Menor y por Mayor, envios a todo el país.
        </p>
        
        <a 
          href="#contacto"
          className="mt-10 bg-muebles-oro hover:bg-muebles-oro-oscuro text-muebles-fondo font-bold py-4 px-8 rounded-lg shadow-lg transition-all transform hover:scale-105 inline-block"
        >
          Cotizá tu mueble personalizado
        </a>
      </section>

      {/* 2. NUEVA SECCIÓN: ¿Quiénes Somos? con fondo crema */}
      <div id="nosotros">
        <QuienesSomos />
      </div>

      {/* 3. Galería de Fotos */}
      <div id="galeria">
        <Galeria />
      </div>

      {/* 4. Sección de Contacto */}
      <div id="contacto">
        <Contacto />
      </div>

      {/* 5. Footer */}
      <footer className="bg-stone-950 text-stone-400 py-8 text-center text-sm border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} CBMuebles. Todos los derechos reservados.</p>
          <p className="font-medium">
            Desarrollado por <span className="text-muebles-oro hover:underline cursor-pointer">Martin Becerra</span>
          </p>
        </div>
      </footer>

      <BotonWhatsapp />
    </main>
  );
}