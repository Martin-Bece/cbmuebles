export default function BotonWhatsapp() {
  return (
    <a
      href="https://wa.me/5492664304069?text=Hola!%20Vi%20la%20página%20web%20y%20quería%20consultar%20por%20un%20mueble%20personalizado."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 transition-all transform hover:scale-110 active:scale-95 group flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <img 
        src="/whatsapp-icon.png" 
        alt="WhatsApp" 
        className="w-16 h-16 object-contain drop-shadow-xl"
      />
      
      {/* Tooltip flotante al pasar el mouse */}
      <span className="absolute right-18 bg-stone-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
        ¿Consultas? Escribinos
      </span>
    </a>
  );
}