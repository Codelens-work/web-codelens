import './sectionReference.css';
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion';
import Section from '../section/Section';
import CardReference from '../cardReference/CardReference';

const SectionReference = () => {
  const { t } = useTranslation()
  const testimonials = t('home.testimonials-section.cards', { returnObjects: true });

  return (
    <Section className='reference-container'>
      <div className='reference-intro'>
        <motion.h2
          className='h2-line'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          {t('home.testimonials-section.heading')}
        </motion.h2>
        <motion.span
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t('home.testimonials-section.subheading')}
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {t('home.testimonials-section.intro')}
        </motion.p>
      </div>
      <section className='card-reference-container'>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <CardReference
              logo={testimonial.logo}
              businessName={testimonial['business-name']}
              personFullname={testimonial['person-fullname']}
              content={testimonial.content}
              siteUrl={testimonial['site-url']}
            />
          </motion.div>
        ))}
      </section>
    </Section>
  );
}

export default SectionReference;