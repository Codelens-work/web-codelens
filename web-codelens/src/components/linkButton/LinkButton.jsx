import PropTypes from "prop-types";
import "./linkbutton.css";

const LinkButton = ({ label, href, size = "normal, small" }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetSection = document.querySelector(href);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href={href}
      className={`link-btn link-btn-${size}`}
      onClick={handleClick}
    >
      {label}
    </a>
  );
};

LinkButton.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired, 
  size: PropTypes.oneOf(["normal", "card"]),
};

export default LinkButton;