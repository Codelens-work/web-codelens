import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState, useRef } from "react";
import Modal from "./Modal";
import { useTranslation } from "react-i18next";
import '../contact/contact.css'


const ContactForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const businessRef = useRef(null);
  const messageRef = useRef(null);
//   const { t, i18n } = useTranslation();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [msjApi, setMsjApi] = useState({
    title: "",
    text: "",
  });

  const closeModal = () => setModalIsOpen(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business:"",
    message: "",
  });


  const [errors, setErrors] = useState({
    name: false,
    email: false,
    emailMismatch: false,
    message: false,
    shortMessage: false,
  });

  const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{1,33}$/;
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

  const handlerSubmit = (event) => {
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
      sendEmail(event);
      console.log(formData);

      // Reinicia los campos
      setFormData({
        name: "",
        email: "",
        business:"",
        message: "",
      });
    }
  };


  const modalSuccessful = "¡Envio exitoso!"
  const modalSuccessfulText1 = `${formData.name} tu mensaje ha sido enviado correctamente desde el email ${formData.email} ` 
  const modalSuccessfulText2 = ". Muchas gracias por escribirme. Nos pondermos en contacto contigo a la brevedad."

  const modalError = "¡Error en el envío!"
  const modalErrorText1 = `${formData.name}, no se pudo enviar tu mensaje a desde el email ${formData.email}.` 
  const modalErrorText2 =  `. Por favor, inténtalo nuevamente más tarde o contáctame a través de otro medio. Lamentamos las molestias.`


  return (
    <>
      <div className="container-form-section">
        <Form className="form-container" onSubmit={handlerSubmit}>
          <Form.Group className="form-group">
            <Form.Label>Nombre y Apellido</Form.Label>
            <div>
              <Form.Control
                ref={nameRef}
                name="name"
                type="text"
                placeholder="Jonh Doe"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "input-error" : ""}
              />
            </div>
            {errors.name && (
              <div className="alert alert-warning">
                "El nombre debe contener solo letras."
              </div>
            )}
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Label>Email</Form.Label>
            <div>
              <Form.Control
                ref={emailRef}
                name="email"
                type="email"
                placeholder="example@example.com"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "input-error" : ""}
              />
            </div>
            {errors.email && (
              <div className="alert alert-warning">
                "El cambo es obligatorio y debe tener formato de Email."
              </div>
            )}
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Label>Empresa o Negocio</Form.Label>
            <div >
              <Form.Control
                ref={businessRef}
                name="business"
                type="business"
                placeholder="Nombre de tu empresa"
                value={formData.business}
                onChange={handleChange}
              />
            </div>
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Label>¿Como podemos ayudarte?</Form.Label>
            <Form.Control
              ref={messageRef}
              name="message"
              as="textarea"
              placeholder="Cuéntanos un poco de tu idea."
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? "input-error" : ""}
              maxLength={200}
            />
            {errors.message && (
              <div className="alert alert-warning">
                'El mensaje debe tener como minimo 10 caracteres.'
              </div>
            )}
          </Form.Group>
          <Button type="submit" variant="primary" className="contact-button">
            ENVIAR
          </Button>
          {modalIsOpen && (
            <Modal
            title={modalSuccessful}
              text={modalSuccessfulText1 + modalSuccessfulText2}
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