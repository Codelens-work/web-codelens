import './teamSection.css';
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion';
import CardTeam from '../cardTeam/CardTeam';


const TeamSection = () => {
    const { t } = useTranslation();
    const team = t("about-us-page.team-section.cards", { returnObjects: true });
  
    return (
      <div className='team-section-section'>
        <div className='team-section-content'>
          <h2>{t('about-us-page.team-section.heading')}</h2>
          <span className='team-intro'>{t('about-us-page.team-section.intro')}</span>
        </div>
        <div className="team-section-cards">
          {team.map((member, index) => (
            <CardTeam key={index} member={member} />
          ))}
        </div>
      </div>
    );
  };
  
  export default TeamSection;