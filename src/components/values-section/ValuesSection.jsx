import './valuesSection.css';
import { useInView } from 'react-intersection-observer';
import CardValue from '../cardValueSection/cardValue';

const ValueSection = ({valuesSectionText}) => {

  const values = valuesSectionText.cards;


  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <>
      <div className='value-section' ref={ref}>
        <div className='team-section-content'>
          <h2>{valuesSectionText.heading}</h2>
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