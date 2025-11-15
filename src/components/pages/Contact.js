import React from "react";
import ContactForm from "../ContactForm";

function Contact() {
  return (
    <div className="mainWrapper">
      <div className="secondaryWrapper whenSubComponent">
        <div className="width">
          <h1 className="neonText">contact</h1>

          {/* Contact Information Section */}
          <div className="contact">
            <div className="contact-info">
              <div className="contact-item">
                <p>
                  <a
                    href="mailto:personal@juanvassallo.com"
                    className="contact-email"
                  >
                    personal@juanvassallo.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          {/*           <div className="contact-form-section">
            <h3 className="subtitle center">send a message</h3>
            <ContactForm />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
