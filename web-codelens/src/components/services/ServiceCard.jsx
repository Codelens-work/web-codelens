import PropTypes from "prop-types";
import { React, useRef } from "react";

const ServiceCard = ({ titleCarts, descriptionCart }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = (x / rect.width - 0.6) * 3;
    const yPercent = (y / rect.height - 0.6) * -3;

    const rotateX = yPercent * 13;
    const rotateY = xPercent * 13;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.15)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = "rotateX(0) rotateY(0) scale(1)"; // Restablece TODOO
    }
  };

  return (
    <div className="card-container" ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <h3>{titleCarts}</h3>
      <p>{descriptionCart}</p>
    </div>
  );
};

ServiceCard.propTypes = {
  titleCarts: PropTypes.arrayOf(PropTypes.string).isRequired,
  descriptionCart: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ServiceCard;
