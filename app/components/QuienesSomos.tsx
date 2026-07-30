export default function QuienesSomos() {
  return (
    <section className="py-20 px-4 bg-muebles-crema text-muebles-fondo">
      <div className="max-w-6xl mx-auto">
        {/* Distribución: 2 columnas en pantallas medianas/grandes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Columna Texto */}
          <div className="space-y-6">
            <div className="inline-block bg-muebles-madera/10 text-muebles-madera font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-md">
              Precisión & Calidad
            </div>
            <h2 className="text-4xl font-black tracking-tight text-muebles-fondo">
              ¿Quiénes somos?
            </h2>
            <p className="text-lg text-muebles-fondo/90 leading-relaxed">
              Somos una empresa familiar dedicada a la fabricación de
              amoblamientos. Transformamos la madera y el metal en piezas únicas
              diseñadas exclusivamente para complementar y potenciar tus
              espacios.
            </p>

            {/* El bloque que deja claro el tema de los personalizados */}
            <div className="border-l-4 border-muebles-madera pl-4 space-y-2 py-2">
              <h4 className="font-bold text-xl text-muebles-madera">
                Diseños 100% Personalizados
              </h4>
              <p className="text-sm text-muebles-fondo/80">
                Venís con una idea, un plano o una foto de referencia, y
                nosotros calculamos la estructura ideal adaptada a los
                milímetros de tu hogar u oficina.
              </p>
            </div>
          </div>

          {/* Columna Imagen Estética */}
          <div className="relative group">
            {/* Un marco decorativo de fondo usando el color oro del logo */}
            <div className="absolute -inset-2 bg-muebles-oro/30 rounded-2xl blur-sm group-hover:bg-muebles-oro/40 transition-all"></div>

            {/* Foto de stock que simula el taller/madera real */}
            <img
              src="/images/quienes_somos.jpeg"
              alt="Carpintería artesanal"
              className="relative w-full h-[400px] object-cover rounded-2xl shadow-xl border border-muebles-madera/20"
            />
          </div>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-muebles-madera/10 text-center">
          <div className="hidden md:block absolute top-[76px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-muebles-oro/40 to-transparent z-0" />

          <div className="relative space-y-2 z-10 group">
            <div className="mx-auto w-14 h-14 bg-muebles-crema border-2 border-muebles-oro rounded-full flex items-center justify-center text-2xl font-black text-muebles-madera shadow-sm group-hover:scale-105 transition-transform">
              01
            </div>
            <h3 className="font-bold text-lg pt-2">Tu Idea</h3>
            <p className="text-sm text-muebles-fondo/70 max-w-xs mx-auto">
              Nos contás lo que imaginás, las medidas aproximadas y el estilo
              que buscás.
            </p>
            <div className="block md:hidden w-[2px] h-8 bg-muebles-oro/30 mx-auto mt-4" />
          </div>

          <div className="relative space-y-2 z-10 group">
            <div className="mx-auto w-14 h-14 bg-muebles-crema border-2 border-muebles-oro rounded-full flex items-center justify-center text-2xl font-black text-muebles-madera shadow-sm group-hover:scale-105 transition-transform">
              02
            </div>
            <h3 className="font-bold text-lg pt-2">El Diseño</h3>
            <p className="text-sm text-muebles-fondo/70 max-w-xs mx-auto">
              Planificamos la estructura y la combinación perfecta de
              materiales.
            </p>

            <div className="block md:hidden w-[2px] h-8 bg-muebles-oro/30 mx-auto mt-4" />
          </div>

          <div className="relative space-y-2 z-10 group">
            <div className="mx-auto w-14 h-14 bg-muebles-crema border-2 border-muebles-oro rounded-full flex items-center justify-center text-2xl font-black text-muebles-madera shadow-sm group-hover:scale-105 transition-transform">
              03
            </div>
            <h3 className="font-bold text-lg pt-2">Fabricación</h3>
            <p className="text-sm text-muebles-fondo/70 max-w-xs mx-auto">
              Construimos tu mueble con terminaciones de alta calidad y cuidado
              artesanal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
