import React from "react";
import "./notFound.css";
import LinkButton from "/src/components/linkButton/LinkButton.jsx";
const NotFound = () => {
  return (
    <div className="error-container">
      <div className="button-container">
        <LinkButton label="Home" href="/" size="small" />
      </div>
    </div>
  );
};

export default NotFound;
