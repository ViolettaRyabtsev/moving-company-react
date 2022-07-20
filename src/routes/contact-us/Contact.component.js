import React, { useEffect } from "react";
import { useState } from "react";
import "./contact-us.styles.scss";
import "../main-text.styles.scss";
import axios from "axios";
const defaultValue = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  address: "",
  message: "",
};

function ContactUs() {
  const [contactFormObject, setContactFormObject] = useState(defaultValue);
  const {
    firstName,
    lastName,
    phone,
    email,
    address,
    message,
  } = contactFormObject;

  const resetFields = () => {
    setContactFormObject(defaultValue);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const url =
      "https://g4dxkdfal9.execute-api.us-west-2.amazonaws.com/wehomoving-oregon/request-quote";

    const corsEscaper = "https://cors-anywhere.herokuapp.com/";

    let sendForm = async () => {
      const resp = await axios
        .post(url, contactFormObject)
        .then((response) => console.log(response))
        .catch((err) => console.log(err));

      console.log(resp, "response");
    };

    sendForm();

    resetFields();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactFormObject({ ...contactFormObject, [name]: value });
  };

  return (
    <div className="text-container">
      <h2>
        This is an exclusive channel where you can get in touch with Viking.
        Send us your suggestion, doubt or compliment.
      </h2>
      <div className="contact-form">
        <form className="contact-container" onSubmit={handleSubmit}>
          <input
            name="firstName"
            placeholder="First name"
            onChange={handleChange}
            label="first-name"
            type="text"
            value={firstName}
            className="contact-box-first-name"
            required
          />
          <input
            onChange={handleChange}
            name="lastName"
            placeholder="Last name"
            label="last-name"
            value={lastName}
            type="text"
            className="contact-box-field-last-name"
            required
          />
          <input
            label="email"
            type="email"
            placeholder="email"
            value={email}
            className="contact-box-field-email"
            onChange={handleChange}
            name="email"
            required
          />
          <input
            name="phone"
            placeholder="Phone number"
            label="phone-number"
            type="text"
            value={phone}
            className="contact-box-field-phone"
            onChange={handleChange}
            required
          />
          <input
            placeholder="address"
            name="address"
            value={address}
            onChange={handleChange}
            type="text"
            label="address"
            className="contact-box-field-address"
            required
          />
          <input
            placeholder="message"
            name="message"
            value={message}
            label="message"
            className="message-box"
            type="text"
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit-button">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
