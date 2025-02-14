import './cardValue.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const CardValue = ({ icon, content, index }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2,
    });
  
    // 📌 Definir animación para cada tarjeta según su posición
    const getAnimation = () => {
      if (index < 3) return { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } }; // Primera fila desde la IZQUIERDA
      return { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } }; // Segunda fila desde la DERECHA
    };
  
    return (
      <motion.div
        ref={ref}
        initial={getAnimation().initial}
        animate={inView ? getAnimation().animate : getAnimation().initial}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: index * 0.2, // ✨ Escalonado
        }}
      >
        <div className="card-value">
        <picture>
          <img src={icon} alt="Icono de valor" />
        </picture>
        <span>{content}</span>
        </div>
      </motion.div>
    );
  };
  
  export default CardValue;