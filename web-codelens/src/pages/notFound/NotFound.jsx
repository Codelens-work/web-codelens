import React from "react";
import "./notFound.css";
import LinkButton from "/src/components/linkButton/LinkButton.jsx";

const NotFound = () => {
  return (
    <div className="error-container">
      <div className="content-container">
        <p>Oops! Página no encontrada, pero el código sigue corriendo...</p>
        <LinkButton label="Home" href="/" size="error" />
      </div>
    </div>
  );
};

export default NotFound;
