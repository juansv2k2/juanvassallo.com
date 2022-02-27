import React from "react";
import ContactForm from "../ContactForm";

function Contact() {
    return (
        <div className="bodyDiv">
            <h1>Contact</h1>

            <div>
                <ContactForm />
            </div>

            <div>
                <h2 className="subtitle">Juan Sebastian Vassallo</h2>
                <h3 className="subtitle">John Lunds Plass 4, 4 et. </h3>
                <h3 className="subtitle">5015 Bergen</h3>
                <h3 className="subtitle">Norway</h3>
                <h3 className="subtitle">juan.vassallo@uib.no</h3>
            </div>
        </div>
    );
}

export default Contact;
