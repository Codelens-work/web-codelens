import './aboutCodelens.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Section from '../section/Section';

const AboutCodeLens = ({aboutUsText}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      y: 50,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className='about-Codelens-section' ref={ref}>
      <Section>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={itemVariants}
          >
            {aboutUsText.heading}
          </motion.h2>
          <div className='about-Codelens-content'>
            <motion.div
              className='about-Codelens-logo'
              variants={itemVariants}
            >
              <picture>
                <img src="/icons/logo_completo.svg" alt="Logo CodeLens" />
              </picture>
            </motion.div>
            <motion.div
              variants={containerVariants}
            >
              {aboutUsText.content.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="about-paragraph"
                  variants={itemVariants}
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}

export default AboutCodeLens;