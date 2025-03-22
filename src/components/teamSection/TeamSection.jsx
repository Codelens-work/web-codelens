import './teamSection.css';
import Section from '../section/Section';
import CardTeam from '../cardTeam/CardTeam';


const TeamSection = ({teamSectionContent}) => {
    const team = teamSectionContent.cards;
  
    return (
      <div className='team-section'>
        <Section>
          <div className='team-section-content h2-line-container'>
            <h2 className='h2-line'>{teamSectionContent.heading}</h2>
            <span className='team-intro paragraph-custom-small'>{teamSectionContent.intro}</span>
          </div>
          <div className="team-section-cards">
            {team.map((member, index) => (
              <CardTeam key={index} member={member} />
            ))}
          </div>
        </Section>
      </div>
    );
  };
  
  export default TeamSection;