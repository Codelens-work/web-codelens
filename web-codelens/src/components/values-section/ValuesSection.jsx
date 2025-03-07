import './valuesSection.css';
import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer';
import CardValue from '../cardValueSection/cardValue';

const  ValueSection = () => {
    const { t } = useTranslation()

    const values = t('about-us-page.values-section.cards', { returnObjects: true });

    // Detecta si el componente está en la vista
    const { ref, inView } = useInView({
        triggerOnce: true, // Solo se activa una vez
        threshold: 0.2 // Se activa cuando el 20% del componente es visible
    });

    return (
        <>
        <div className='value-section' ref={ref}>
           <div className='team-section-content'>
                <h2>{t('about-us-page.values-section.heading')}</h2>
           </div>
           <div className='cards-container'>
                {values.map((value, index) => (
                    <CardValue key={index} icon={value.icon} content={value.content} index={index} />
                ))}
            </div>
        </div>
        </>
    );
}

export default ValueSection;