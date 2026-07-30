import muebles from '../muebles.json';

export default function Galeria() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-stone-800">Nuestros Trabajos</h2>
        <p className="text-stone-600 mt-2">Una muestra de los proyectos que diseñamos e instalamos.</p>
      </div>

      {/* Grilla Responsiva: 1 columna en celu, 2 en tablet, 3 en compu */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {muebles.map((mueble) => (
          <div 
            key={mueble.id} 
            className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            {/* Contenedor de la Imagen */}
            <div className="h-64 w-full bg-stone-200 relative">
              <img 
                src={mueble.imagen} 
                alt={mueble.titulo}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 bg-amber-800 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                {mueble.categoria}
              </span>
            </div>

            {/* Texto de la tarjeta */}
            <div className="p-5">
              <h3 className="text-xl font-bold text-stone-800">{mueble.titulo}</h3>
              <p className="mt-2 text-stone-600 text-sm">{mueble.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}