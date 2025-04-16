import './WhatsAppButton.css';

const FloatingWhatsApp = () => {
  const phone = '5491123516988';
  const message = '¡Hola! Estoy interesado en los servicios de CodeLens.';
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phone}?text=${encodedMessage}`;

  return (
    <div className="whatsapp-container">
      <a
        href={url}
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <span className="pulse-ring"></span>
        <img src="/icons/whatsapp.svg" alt="WhatsApp Icon" className="icon" />
        <span className="tooltip-whatssap">¡Contáctanos!</span>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;