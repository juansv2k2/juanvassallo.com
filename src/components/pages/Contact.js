import React from "react";
import ContactForm from "../ContactForm";

function Contact() {
  return (
    <div className="mainWrapper">
      <div className="secondaryWrapper whenSubComponent">
        <div className="width">
          <h1 className="neonText">Contact</h1>

          {/* Contact Information Section */}
          {/*    <div className="contact">
            <div className="indivContact">
              <h3 className="subtitle">...</h3>
              <h3 className="subtitle">Juan Sebastian Vassallo</h3>
              <h3>...</h3>
              <h3 className="subtitle">Lars Hilles Gate 3 </h3>
              <h3 className="subtitle">5015 Bergen (Norway)</h3>
              <h3 className="subtitle">personal@juanvassallo.com</h3>
              <h3 className="subtitle">...</h3>
            </div>
          </div> */}

          {/* Contact Form Section */}
          <div className="contact-form-section">
            <h3 className="subtitle center">Send a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
