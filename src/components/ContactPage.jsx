import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/contact-page.css';

const ContactPage = () => {

    const emailHoover = (e) => {
        e.target.innerText = e.type === "mouseenter" ? "ROBIN.HEDLUND@LIVE.SE" : "EMAIL";
    }

    const phoneNumberHoover = (e) => {
        e.target.innerText = e.type === "mouseenter" ? "076-240 81 85" : "PHONE NUMBER";
    }

    return (
        <div class="contact-page">
            <Link id="contact-link-btn" to="/">Go back</Link>
            <div class="contact-container">
                <a
                    class="contact-info"
                    id="email"
                    onMouseEnter={emailHoover}
                    onMouseLeave={emailHoover}
                    href="mailto:robin.hedlund@live.se"
                >
                    Email
                </a>

                <a
                    class="contact-info"
                    id="phoneNumber"
                    onMouseEnter={phoneNumberHoover}
                    onMouseLeave={phoneNumberHoover}
                    href="sms:+46762408185">
                    Phone Number
                </a>
            </div>
        </div>
    )
}

export default ContactPage;