import './aboutCodelens.css';
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Section from '../../components/section/Section';

const  AboutCodeLens = () => {
    const { t } = useTranslation()

    // Detecta si el componente está en la vista
    const { ref, inView } = useInView({
        triggerOnce: true, // Solo se activa una vez
        threshold: 0.2 // Se activa cuando el 20% del componente es visible
    });

    return (
        <div className='about-Codelens-section' ref={ref}>
          <Section>
            <h2>{t('about-us-page.about-section.heading')}</h2>
            <div className='about-Codelens-content'>
                <div className='about-Codelens-logo'>
                    <motion.div 
                        className='about-Codelens-logo'
                        initial={{ opacity: 0, y: 50 }} // Oculto y desplazado abajo
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Aparece cuando está en vista
                        transition={{ duration: 0.8, ease: "easeOut" }} // Suavizado
                    >
                        <picture>
                            <img src="icons/logo_completo.svg" alt="Logo CodeLens" />
                        </picture>
                    </motion.div>
                </div>
                <div>
                    {t('about-us-page.about-section.content', { returnObjects: true }).map((paragraph, index) => (
                        <p key={index} className="about-paragraph">{paragraph}</p>
                    ))}
                </div>
            </div>
          </Section>
        </div>
    );
}

export default AboutCodeLens;