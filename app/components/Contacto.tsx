'use client';

import { useState } from 'react';

export default function Contacto() {
  // Estados para el mensajero de correo electrónico
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  // Estados nuevos para el flujo de envío real
  const [enviando, setEnviando] = useState(false);
  const [estadoEnvio, setEstadoEnvio] = useState<'exito' | 'error' | null>(null);

  const manejarEnvioEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    setEstadoEnvio(null);

    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzepzrkk";

    try {
      const respuesta = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          nombre: nombre,
          email: email,
          mensaje: mensaje
        })
      });

      if (respuesta.ok) {
        setEstadoEnvio('exito');
        // Limpiamos los campos
        setNombre('');
        setEmail('');
        setMensaje('');
      } else {
        setEstadoEnvio('error');
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setEstadoEnvio('error');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-muebles-fondo text-muebles-crema border-t-4 border-muebles-madera">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Título de la sección */}
        <div className="text-center space-y-3">
          <h2 className="text-4xl font-black tracking-tight uppercase text-muebles-oro">
            Contacto
          </h2>
          <p className="text-muebles-crema/70 max-w-md mx-auto text-sm font-medium">
            Encontranos en nuestros canales oficiales o mandanos un correo directo.
          </p>
        </div>

        {/* Las 3 Tarjetas Superiores */}
        <div className="block space-y-6 md:space-y-0 md:table md:table-fixed md:w-full md:border-separate md:border-spacing-x-6">
          
          {/* Tarjeta 1: WhatsApp */}
          <a 
            href="https://wa.me/5492664304069?text=Hola%20CB%20Muebles!%20Quería%20consultar%20por%20un%20mueble%20personalizado."
            target="_blank"
            rel="noopener noreferrer"
            className="block md:table-cell bg-stone-900/50 border border-muebles-madera/20 rounded-2xl p-8 text-center transition-all transform hover:scale-102 hover:border-muebles-oro/40 group"
          >
            <div className="mx-auto w-14 h-14 bg-stone-800 rounded-full flex items-center justify-center mb-5 group-hover:bg-muebles-madera/20 transition-colors">
              <svg className="w-6 h-6 text-muebles-oro" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.4.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm6.59-4.846c1.66.986 3.296 1.48 4.904 1.481 5.482 0 9.942-4.46 9.945-9.943.002-2.656-1.03-5.153-2.906-7.03C16.714 1.774 14.22 .74 11.566.741c-5.486 0-9.947 4.46-9.95 9.943-.001 1.916.51 3.5 1.474 5.118l-.982 3.585 3.68-.966zm12.357-5.702c-.314-.157-1.854-.915-2.137-1.019-.283-.105-.49-.157-.696.157-.206.314-.798 1.019-.979 1.225-.181.206-.363.231-.678.074-1.373-.687-2.316-1.124-3.235-2.704-.24-.412.24-.382.687-1.274.075-.157.038-.293-.019-.412-.057-.119-.49-1.183-.67-1.621-.176-.424-.354-.366-.49-.372-.125-.006-.27-.007-.413-.007s-.377.054-.574.271c-.197.217-.753.736-.753 1.795 0 1.059.771 2.081.879 2.229.108.148 1.517 2.316 3.675 3.248 1.229.531 1.696.533 2.302.476.495-.047 1.517-.619 1.73-.1.217-.519.217-.962.153-1.019-.064-.058-.232-.115-.546-.272z"/>
              </svg>
            </div>
            <h3 className="font-bold text-xl text-muebles-oro mb-1">WhatsApp</h3>
            <p className="text-sm text-muebles-crema/80 font-mono tracking-wide">+54 9 2664 30-4069</p>
          </a>

          <a 
            href="https://maps.app.goo.gl/2VvHVytPWfJpwLn86" 
            target="_blank"
            rel="noopener noreferrer"
            className="block md:table-cell bg-stone-900/50 border border-muebles-madera/20 rounded-2xl p-8 text-center transition-all transform hover:scale-102 hover:border-muebles-oro/40 group"
          >
            <div className="mx-auto w-14 h-14 bg-stone-800 rounded-full flex items-center justify-center mb-5 group-hover:bg-muebles-madera/20 transition-colors">
              <svg className="w-6 h-6 text-muebles-oro" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-xl text-muebles-oro mb-1">Dónde estamos ubicados</h3>
            <p className="text-sm text-muebles-crema/80">San Luis, Argentina</p>
          </a>

          {/* Tarjeta 3: Instagram */}
          <a 
            href="https://instagram.com/cbmuebless"
            target="_blank"
            rel="noopener noreferrer"
            className="block md:table-cell bg-stone-900/50 border border-muebles-madera/20 rounded-2xl p-8 text-center transition-all transform hover:scale-102 hover:border-muebles-oro/40 group"
          >
            <div className="mx-auto w-14 h-14 bg-stone-800 rounded-full flex items-center justify-center mb-5 group-hover:bg-muebles-madera/20 transition-colors">
              <svg className="w-6 h-6 text-muebles-oro" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
            <h3 className="font-bold text-xl text-muebles-oro mb-1">Instagram</h3>
            <p className="text-sm text-muebles-crema/80">@cbmuebless</p>
          </a>

        </div>

        {/* Mensajero para Enviar Mails (Abajo de las tarjetas) */}
        <div className="max-w-2xl mx-auto bg-stone-900/40 border border-muebles-madera/20 rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-black text-muebles-oro mb-2 text-center uppercase tracking-wide">
            Envianos un Mensaje Directo
          </h3>
          <p className="text-center text-xs text-muebles-crema/60 mb-6 font-medium">
            Completá tus datos y contanos en qué proyecto estás pensando.
          </p>

          <form onSubmit={manejarEnvioEmail} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-muebles-oro uppercase tracking-wider">Nombre</label>
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Tu nombre completo"
                  className="w-full bg-stone-950 text-muebles-crema placeholder-muebles-crema/20 border border-muebles-madera/20 rounded-xl p-3 text-sm focus:outline-none focus:border-muebles-oro/60 transition-colors"
                  required
                  disabled={enviando}
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-muebles-oro uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ejemplo@correo.com"
                  className="w-full bg-stone-950 text-muebles-crema placeholder-muebles-crema/20 border border-muebles-madera/20 rounded-xl p-3 text-sm focus:outline-none focus:border-muebles-oro/60 transition-colors"
                  required
                  disabled={enviando}
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-muebles-oro uppercase tracking-wider">Consulta o Medidas</label>
              <textarea
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                placeholder="Detallá los materiales, colores o dimensiones que necesitás para tu mueble..."
                className="w-full h-32 bg-stone-950 text-muebles-crema placeholder-muebles-crema/20 border border-muebles-madera/20 rounded-xl p-3 text-sm focus:outline-none focus:border-muebles-oro/60 resize-none transition-colors"
                required
                disabled={enviando}
              />
            </div>

            {/* Mensajes de feedback visual dinámicos */}
            {estadoEnvio === 'exito' && (
              <p className="text-green-400 text-xs font-bold bg-green-950/30 border border-green-500/20 rounded-xl p-3 text-center animate-fadeIn">
                ¡Gracias {nombre}! Tu mensaje fue enviado con éxito. Nos pondremos en contacto pronto.
              </p>
            )}

            {estadoEnvio === 'error' && (
              <p className="text-red-400 text-xs font-bold bg-red-950/30 border border-red-500/20 rounded-xl p-3 text-center animate-fadeIn">
                Hubo un problema al enviar el mensaje. Por favor, intentá comunicarte por WhatsApp.
              </p>
            )}

            <button
              type="submit"
              disabled={enviando}
              className={`w-full mt-2 text-muebles-fondo font-black py-3 px-6 rounded-xl text-xs uppercase tracking-widest shadow-lg transition-all transform active:scale-98 ${
                enviando 
                  ? 'bg-muebles-oro/50 cursor-not-allowed animate-pulse' 
                  : 'bg-muebles-oro hover:bg-muebles-oro/90'
              }`}
            >
              {enviando ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}