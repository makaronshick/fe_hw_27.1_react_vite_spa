import React from "react";
import "./about.styles.css";

export default () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our company strives to provide innovative solutions that help clients
          achieve their goals. We combine technology and creativity to create
          unique products that improve daily life.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Team</h2>
        <p>
          Our team consists of highly skilled professionals from various fields.
          We work together to find the best solutions for our clients and
          support them at every step of the way. We take pride in our culture of
          openness and collaboration.
        </p>
      </section>

      <section className="about-section">
        <h2>Company History</h2>
        <p>
          Founded in 2010, our company has grown from a startup to a leading
          player in the industry. Over the years, we have expanded from a small
          team of enthusiasts to a large enterprise known for innovation and
          customer orientation.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Values</h2>
        <ul className="about-values-list">
          <li>Quality and Reliability</li>
          <li>Openness and Honesty</li>
          <li>Continuous Improvement and Innovation</li>
          <li>Customer Focus</li>
        </ul>
      </section>
    </div>
  );
};
