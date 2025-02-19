import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState, useRef } from "react";
import Modal from "./Modal";
import { useTranslation } from "react-i18next";
import "../contact/contact.css";
import { text } from "framer-motion/client";

const ContactForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const businessRef = useRef(null);
  const messageRef = useRef(null);
  const { t, i18n } = useTranslation();
  const tForm = t("home.contact-section.contact-form", { returnObjects: true });

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [msjApi, setMsjApi] = useState({
    title: "",
    text: "",
  });

  const closeModal = () => setModalIsOpen(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    emailMismatch: false,
    message: false,
    shortMessage: false,
  });

  const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,33}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors((prevErrors) => {
      let newErrors = { ...prevErrors };

      if (name === "name") {
        newErrors.name = !nameRegex.test(value);
      } else if (name === "email") {
        newErrors.email = !emailRegex.test(value);
      } else if (name === "message") {
        newErrors.message = value.trim().length < 10;
      }

      return newErrors;
    });
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();

    const { name, email, message } = formData;
    let formIsValid = true;

    if (!name.trim() || !nameRegex.test(name)) {
      setErrors((prevErrors) => ({ ...prevErrors, name: true }));
      nameRef.current.focus();
      formIsValid = false;
    }

    if (!email.trim() || !emailRegex.test(email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: true }));
      if (formIsValid) emailRef.current.focus();
      formIsValid = false;
    }

    if (!message.trim() || message.length < 10) {
      setErrors((prevErrors) => ({ ...prevErrors, message: true }));
      if (formIsValid) messageRef.current.focus();
      formIsValid = false;
    }

    if (message.length < 10) {
      setErrors((prevErrors) => ({ ...prevErrors, shortMessage: true }));
      if (formIsValid) messageRef.current.focus();
      formIsValid = false;
    }

    if (formIsValid) {
      await sendEmail(event);
      console.log(formData);

      // Reinicia los campos
      setFormData({
        name: "",
        email: "",
        business: "",
        message: "",
      });
    }
  };

  const modalSuccessTitle = tForm.modals.titlesuccess;
  const modalSuccessText = tForm.modals.success;

  const modalErrorTitle = tForm.modals.titleerror;
  const modalErrorText = tForm.modals.error;

  const sendEmail = async() => {
    // aca llamar a la api
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("business", formData.business);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("_gotcha", ""); // Honeypot anti-spam
    try{
      const response = await fetch("https://getform.io/f/aroyylnb", {
      method: "POST",
      body: formDataToSend,
    });
    if (response.ok){
      setMsjApi({title: modalSuccessTitle, text: modalSuccessText});
      setModalIsOpen(!modalIsOpen);
    
    } else {
      setMsjApi({title:modalErrorTitle,text:modalErrorText});
      setModalIsOpen(!modalIsOpen);
    
    }
  } catch(error){
      console.log(error);
      setMsjApi({title:modalErrorTitle, text:modalErrorText});
      setModalIsOpen(!modalIsOpen);
    
    }
  };

  return (
    <>
      <div className="container-form-section">
        <Form className="form-container" onSubmit={handlerSubmit}>
          <Form.Group className="form-group">
            <Form.Label>{tForm.inputs.fullname.label}</Form.Label>
            <div>
              <Form.Control
                ref={nameRef}
                name="name"
                type="text"
                placeholder={tForm.inputs.fullname.placeholder}
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "input-error" : ""}
              />
            </div>
            {errors.name && (
              <div className="alert alert-warning">
                {t(
                  "home.contact-section.contact-form.inputs.fullname.validation-error"
                )}
              </div>
            )}
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Label>{tForm.inputs.email.label}</Form.Label>
            <div>
              <Form.Control
                ref={emailRef}
                name="email"
                type="email"
                placeholder={tForm.inputs.email.placeholder}
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "input-error" : ""}
              />
            </div>
            {errors.email && (
              <div className="alert alert-warning">
                {t(
                  "home.contact-section.contact-form.inputs.email.validation-error"
                )}
              </div>
            )}
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Label>{tForm.inputs.business.label}</Form.Label>
            <div>
              <Form.Control
                ref={businessRef}
                name="business"
                type="business"
                placeholder={tForm.inputs.business.placeholder}
                value={formData.business}
                onChange={handleChange}
              />
            </div>
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Label>{tForm.inputs.content.label}</Form.Label>
            <Form.Control
              ref={messageRef}
              name="message"
              as="textarea"
              placeholder={tForm.inputs.content.placeholder}
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? "input-error" : ""}
              maxLength={200}
            />
            {errors.message && (
              <div className="alert alert-warning">
                {t(
                  "home.contact-section.contact-form.inputs.content.validation-error"
                )}
              </div>
            )}
          </Form.Group>
          <Button type="submit" variant="primary" className="contact-button">
            {tForm.inputs.submit}
          </Button>
          {modalIsOpen && (
            <Modal
              title={msjApi.title}
              text={msjApi.text}
              onClose={modalIsOpen}
              onCloseModal={closeModal}
            />
          )}
        </Form>
      </div>
    </>
  );
};

export default ContactForm;
