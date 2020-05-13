import React from "react";
import "./contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact">
      <Link to="/" className="contactTitle">
        Memory Horror Game
      </Link>
      <h2 className="contactContainer">
        <p>
          This game was brought to you by 4 Wild Code School Marseille students.
        </p>
        <p>
          In the event you wish to contact them, the following information may
          help you.
        </p>
        <p>But careful, no complaints allowed !</p>
      </h2>
    </div>
  );
};
export default Contact;
