import './cardValue.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const CardValue = ({ icon, content, alt, index }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2,
    });
  
    const getAnimation = () => {
      if (index < 3) return { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } }; 
      return { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } }; 
    };
  
    return (
      <motion.div
        ref={ref}
        initial={getAnimation().initial}
        animate={inView ? getAnimation().animate : getAnimation().initial}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: index * 0.2, 
        }}
      >
        <div className="card-value">
        <picture>
          <img src={icon} alt={alt} />
        </picture>
        <span>{content}</span>
        </div>
      </motion.div>
    );
  };
  
  export default CardValue;