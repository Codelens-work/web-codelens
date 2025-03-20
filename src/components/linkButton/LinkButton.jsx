import PropTypes from "prop-types";
import "./linkbutton.css";
import { useNavigate } from "react-router-dom";

const LinkButton = ({ label, href, size = "normal, small, error" }) => {
  const navigate = useNavigate();

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
