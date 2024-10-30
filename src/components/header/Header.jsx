import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.css";

export default () => {

  return (
    <nav className="nav_header">
      <Link to="/" className="nav_link">
        Home
      </Link>
      <Link to="/about" className="nav_link">
        About
      </Link>
      <Link to="/contacts" className="nav_link">
        Contacts
      </Link>
    </nav>
  );
};
