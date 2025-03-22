import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState, useRef } from "react";
import Modal from "./Modal";
import { useTranslation } from "react-i18next";
import "./contact.css";

const ContactForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const businessRef = useRef(null);
  const messageRef = useRef(null);
  const { t} = useTranslation();
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
    name: [],
    email: [],
    message: [],
    business: [],
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
        newErrors.name = [];
        if (!nameRegex.test(value))
          newErrors.name.push(tForm.inputs.fullname["validation-error"]);
      }

      if (name === "email") {
        newErrors.email = [];
        if (value.length < 6 || value.length > 25)
          newErrors.email.push(tForm.inputs.email["validation-error"]);
        if (!emailRegex.test(value))
          newErrors.email.push(tForm.inputs.email["invalid-mail-error"]);
      }

      if (name === "business") {
        newErrors.business = [];
        if (value.length < 2 || value.length > 25)
          newErrors.business.push(tForm.inputs.business["validation-error"]);
      }

      if (name === "message") {
        newErrors.message = [];
        if (value.trim().length < 10)
          newErrors.message.push(tForm.inputs.content["validation-error"]);
        if (value.trim().length > 200)
          newErrors.message.push(tForm.inputs.content["size-error"]);
      }

      return newErrors;
    });
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();

    let newErrors = { name: [], email: [], message: [], business: []};
    let formIsValid = true;

    if (!formData.name.trim() || !nameRegex.test(formData.name)) {
      newErrors.name.push(tForm.inputs.fullname["validation-error"]);
      nameRef.current.focus();
      formIsValid = false;
    }

    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      if (formData.email.length < 6 || formData.email.length > 254) {
        newErrors.email.push(tForm.inputs.email["validation-error"]);
      }
      if (!emailRegex.test(formData.email)) {
        newErrors.email.push(tForm.inputs.email["invalid-mail-error"]);
      }
      if (formIsValid) emailRef.current.focus();
      formIsValid = false;
    }

    if (!formData.business.trim() || formData.business.length < 10) {
      newErrors.business.push(tForm.inputs.content["validation-error"]);
      if (formIsValid) messageRef.current.focus();
      formIsValid = false;
    }
    if (formData.business.length > 25) {
      newErrors.business.push(tForm.inputs.content["size-error"]);
      if (formIsValid) messageRef.current.focus();
      formIsValid = false;
    }


    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message.push(tForm.inputs.content["validation-error"]);
      if (formIsValid) messageRef.current.focus();
      formIsValid = false;
    }
    if (formData.message.length > 200) {
      newErrors.message.push(tForm.inputs.content["size-error"]);
      if (formIsValid) messageRef.current.focus();
      formIsValid = false;
    }

    setErrors(newErrors);

    if (formIsValid) {
      await sendEmail(event);
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

  const sendEmail = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("business", formData.business);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("_gotcha", ""); 
    try {
      const response = await fetch("https://getform.io/f/aroyylnb", {
        method: "POST",
        body: formDataToSend,
      });
      if (response.ok) {
        setMsjApi({ title: modalSuccessTitle, text: modalSuccessText });
        setModalIsOpen(!modalIsOpen);
      } else {
        setMsjApi({ title: modalErrorTitle, text: modalErrorText });
        setModalIsOpen(!modalIsOpen);
      }
    } catch (error) {
      setMsjApi({ title: modalErrorTitle, text: modalErrorText });
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
                className={errors.name.length > 0 ? "input-error" : ""}
              />
            </div>
            {errors.name.length > 0 && (
              <div className="alert alert-warning">
                {errors.name.map((err, index) => (
                  <div key={index}>{err}</div>
                ))}
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
                className={errors.email.length > 0 ? "input-error" : ""}
              />
            </div>
            {errors.email.length > 0 && (
              <div className="alert alert-warning">
                {errors.email.map((err, index) => (
                  <div key={index}>{err}</div>
                ))}
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
                className={errors.business.length > 0 ? "input-error" : ""}
              
              />
              {errors.business.length > 0 && (
              <div className="alert alert-warning">
                {errors.business.map((err, index) => (
                  <div key={index}>{err}</div>
                ))}
              </div>
            )}
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
              className={errors.message.length > 0 ? "input-error" : ""}
              maxLength={200}
            />
            {errors.message.length > 0 && (
              <div className="alert alert-warning">
                {errors.message.map((err, index) => (
                  <div key={index}>{err}</div>
                ))}
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
