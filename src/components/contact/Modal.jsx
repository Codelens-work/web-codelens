import React from "react";
import "./contact.css";
import PropTypes from "prop-types";

const Modal = ({ text, title, onClose, onCloseModal }) => {
  return (
    <div className={onClose ? "modal is-open" : "modal"}>
      <div className="modal-conteiner">
        <picture className="logo-modal">
          <img className="logo-icon" src="/icons/logo_completo.svg" alt="" />
        </picture>
        <h2>{title}</h2>
        <p>{text}</p>
        <button className="modal-cloes" onClick={onCloseModal}>
          <img className="icon-close" src="/icons/close.svg" alt="icon close" />
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
  onClose: PropTypes.bool,
  onCloseModal: PropTypes.func.isRequired,
};

export default Modal;
