import React, { useEffect } from "react";
import { useState } from "react";
import "./contact-us.styles.scss";
import "../main-text.styles.scss";
import axios from "axios";
const defaultValue = {
  name: "",
  phone: "",
  email: "",
  moveFrom: "",
  moveTo: "",
  moveDate: "",
  details: "",
  website: "www.wehomoving.com",
  aptSize: "",
  sendFrom: "booking@wehomoving.com",
};

function ContactUs() {
  const [contactFormObject, setContactFormObject] = useState(defaultValue);
  const {
    name,
    phone,
    email,
    moveFrom,
    moveTo,
    moveDate,
    details,
    aptSize,
  } = contactFormObject;

  const resetFields = () => {
    setContactFormObject(defaultValue);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(contactFormObject, "object");

    const url =
      "https://g4dxkdfal9.execute-api.us-west-2.amazonaws.com/wehomoving-oregon/request-quote";

    const corsEscaper = "https://cors-anywhere.herokuapp.com/";

    let sendForm = async () => {
      const resp = await axios
        .post(url, contactFormObject)
        .then(
          (response) => console.log(response, "response")
          // alert(
          //   "Your quote has been sent! We would get back to you as soon as we can."
          // )
        )
        .catch((err) => console.log(err));

      console.log(resp, "response");
    };

    sendForm();
    resetFields();
  };

  const handleChange = (e) => {
    console.log(contactFormObject);
    const { name, value } = e.target;
    console.log("name and value", name, value);
    setContactFormObject({ ...contactFormObject, [name]: value });

    if (name === "moveDate") {
      setContactFormObject({
        ...contactFormObject,
        [name]: value.split("-").join("-"),
      });
    }
  };

  return (
    <>
      <div className="contact-us-container">
        <h2>Get Started With a Free Phone or Online Quote</h2>
        <div className="contact-form">
          <form className="contact-container" onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="name"
              onChange={handleChange}
              label="name"
              type="text"
              value={name}
              className="contact-box-first-name"
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
              placeholder="phone number"
              label="phone-number"
              type="text"
              value={phone}
              className="contact-box-field-phone"
              onChange={handleChange}
              required
            />
            <input
              placeholder="move from"
              name="moveFrom"
              value={moveFrom}
              onChange={handleChange}
              type="text"
              label="move from"
              className="contact-box-field-moveFrom"
            />
            <input
              placeholder="move to"
              name="moveTo"
              value={moveTo}
              onChange={handleChange}
              type="text"
              label="move to"
              className="contact-box-field-moveto"
            />
            <input
              placeholder="move date"
              name="moveDate"
              value={moveDate}
              onChange={handleChange}
              type="date"
              label="date"
              className="contact-box-field-movedate"
              required
            />
            <input
              placeholder="apartment size"
              name="aptSize"
              value={aptSize}
              onChange={handleChange}
              type="text"
              label="aptSize"
              className="contact-box-field-aptSize"
            />
            <input
              placeholder="details"
              name="details"
              value={details}
              label="details"
              className="details-box"
              type="text"
              onChange={handleChange}
            />
            <button type="submit" className="submit-button">
              SEND
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
