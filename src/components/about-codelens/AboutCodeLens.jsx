import './aboutCodelens.css';
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Section from '../section/Section';

const AboutCodeLens = () => {
    const { t } = useTranslation()

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
        <div className='about-Codelens-section flex-center flex-column' ref={ref}>
          <Section>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                <motion.h2 
                    variants={itemVariants}
                >
                    {t('about-us-page.about-section.heading')}
                </motion.h2>
                <div className='about-Codelens-content flex-no-center gap-30 '>
                    <motion.div 
                        className='about-Codelens-logo flex-center'
                        variants={itemVariants}
                    >
                        <picture>
                            <img src="/icons/logo_completo.svg" alt="CodeLens Logo" />
                        </picture>
                    </motion.div>
                    <motion.div
                        variants={containerVariants}
                    >
                        {t('about-us-page.about-section.content', { returnObjects: true }).map((paragraph, index) => (
                            <motion.p 
                                key={index} 
                                className="about-paragraph paragraph-custom-small"
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