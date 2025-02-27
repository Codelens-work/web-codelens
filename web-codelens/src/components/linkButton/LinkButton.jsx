import PropTypes from "prop-types";
import "./linkbutton.css";
import { useNavigate } from "react-router-dom";

const LinkButton = ({ label, href, size = "normal, small" }) => {
  const navigate = useNavigate();

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   const targetSection = document.querySelector(href);
  //   if (targetSection) {
  //     targetSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <>
      <a
        className={`link-btn link-btn-${size}`}
        onClick={() => navigate(href)}
      >
        {label}
      </a>
    </>
  );
};

LinkButton.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["normal", "small"]),
};

export default LinkButton;
