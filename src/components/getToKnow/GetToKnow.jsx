import Section from '../section/Section' 
import LinkButton from '../linkButton/LinkButton'
import { motion } from 'framer-motion'
import './getToKnow.css'

const GetToKnow = ({ t, url }) => {

  const slideInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
        opacity: 1, 
        x: 0, 
        transition: { 
            duration: 0.8, 
            ease: "easeOut" 
        } 
    },
};

const slideInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
        opacity: 1, 
        x: 0, 
        transition: { 
            duration: 0.8, 
            ease: "easeOut" 
        } 
    },
};

  return(
    <Section className='get-to-know-section'>
      <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount:  0.2 }}
      variants={slideInLeft}
      className="get-to-know-content">
        <h2 className='h2-line'>{t.heading}</h2>
        <span className='paragraph-custom'>{t.subheading}</span>
        <p className='paragraph-custom'>{t.description}</p>
        <LinkButton className='get-to-know-btn' label={t['get-to-know-btn']} href={url} size="normal" />
      </motion.div>
      <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount:  0.2 }}
      variants={slideInRight}
      className="get-to-know-img">
        <img src="/imgs/get-to-know-us.webp" alt={t["img-alt"]} />
      </motion.div>
    </Section>
  )
}

export default GetToKnow;