import React from "react";
import "./contacts.styles.css";

export default () => {
  return (
    <div className="contacts-container">
      <h1>Contact Us</h1>

      <section className="contact-info">
        <h2>Our Contact Information</h2>
        <p>Email: contact@company.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Address: 123 Main St, City, Country</p>
      </section>
    </div>
  );
};
