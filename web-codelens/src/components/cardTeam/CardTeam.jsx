import { useEffect, useState } from 'react';
import './CardTeam.css';

const CardTeam = ({ member }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isMobile) {
    return (
      <div className="card-team desktop">
        <picture className="image-container">
          <img
            src={member["img-url"] || "/default-avatar.png"}
            alt={member.fullname || "Miembro del equipo"}
          />
        </picture>
        <div className="content-wrapper">
          <h3>{member.fullname}</h3>
          <p>{member.role}</p>
        </div>
      </div>
    );
  }

  return (
    <details className="card-team mobile">
      <summary>
        <img
          draggable="false"
          src={member["img-url"] || "/default-avatar.png"}
          alt={member.fullname || "Miembro del equipo"}
        />
      </summary>
      <div className="details-content-wrapper">
        <h3>{member.fullname}</h3>
        <p>{member.role}</p>
      </div>
    </details>
  );
};

export default CardTeam;