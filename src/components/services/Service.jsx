import "./service.css";
import PropTypes from "prop-types"
import Section  from "../section/Section";
import { motion } from 'framer-motion';

const Service = ({ img, altImg, titleOne, paragraphOne, titleTwo, items }) => {
  // Variants para las animaciones
  const slideInLeft = {
    hidden: { opacity: 0, x: -50 }, // Antes -100
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  
  const slideInRight = {
    hidden: { opacity: 0, x: 50 }, // Antes 100
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="service-section-container">
      <Section>
        <div className="service-container">
        <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount:  0.2 }} 
        variants={slideInLeft}
        className="right-column-service"
      >
              <div className="paragraphOne title-padding">
                <h2 className="h2-line">{titleOne}</h2>
                <p>{paragraphOne}</p>
              </div>
              <div className="items title-padding">
                <h2 className="h2-line">{titleTwo}</h2>
                <ul>
                  {items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
            <motion.div 
              className="left-column-service"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount:  0.2 }} 
              variants={slideInRight}
            > 
              <img src={img} alt={altImg} />
              </motion.div>
        </div>
      </Section>
    </div>
  );
};

Service.propTypes={
    img: PropTypes.string.isRequired,
    altImg: PropTypes.string.isRequired,
    titleOne: PropTypes.string.isRequired,
    paragraphOne: PropTypes.string.isRequired,
    titleTwo: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Service;
