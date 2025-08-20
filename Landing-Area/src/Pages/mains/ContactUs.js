
import React from 'react';
import './ContactUs.css';
import { NavLink } from "react-router-dom";

const ContactUs = () => {
    return (
      <div className="contact-us-container">
        <h2>Contact Us</h2>
        <p>If you have any questions or concerns, feel free to reach out to us.</p>

        <div className="contact-info">
        <p>Email: <span className="contact-detail">example@example.com</span></p>
        <p>Phone: <span className="contact-detail">123-456-7890</span></p>
      </div>
  
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
  
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
  
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
  
          <button type="submit">Submit</button>
        </form>
        <NavLink to="/"><button className="redirect-button" >
        Go to Home
      </button></NavLink>
      </div>
    );
  };
  
  export default ContactUs;