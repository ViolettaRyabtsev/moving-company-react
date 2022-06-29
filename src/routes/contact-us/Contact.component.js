import React from "react";
import "./contact-us.styles.scss";
import { Formik, Field, Form } from "formik";
import "../main-text.styles.scss";
function ContactUs() {
  return (
    <div className="text-container">
      <h2>
        This is an exclusive channel where you can get in touch with Viking.
        Send us your suggestion, doubt or compliment.
      </h2>
      <div className="contact-form">
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            message: "live message",
          }}
          onSubmit={async (values) => {
            return alert(JSON.stringify(values, null, 4));
          }}
        >
          <Form class="contact-box">
            <Field name="name" type="text" className="contact-box-field" />
            <Field name="email" type="text" className="contact-box-field" />
            <Field name="phone" type="text" className="contact-box-field" />
            <Field name="message" class="message-box" type="text" />
            <button type="submit" class="submit-button">
              SEND
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default ContactUs;
