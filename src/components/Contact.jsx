import React from "react";
import "./contact.css";
import { Link } from "react-router-dom";
import PlayList from "./PlayList";

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
        <div className="wildLogo">
          <a href="https://www.wildcodeschool.com/fr-FR/campus/marseille">
            <img
              src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png"
              alt="Wild Code School logo"
            />
          </a>
        </div>
        <section className="contactFiles">
          <div className="contactData">
            <p>Helene</p>
            <a href="https://github.com/HeleneM35">
              <img
                className="github"
                src="https://www.iconsdb.com/icons/preview/white/github-11-xxl.png"
                alt="GitHub"
              />
            </a>
            <a href="https://www.linkedin.com/in/helenemorel35/">
              <img
                className="linkedin"
                src="https://img.icons8.com/ios/100/000000/linkedin.png"
                alt="Linked In"
              />
            </a>
          </div>
          <div className="contactData">
            <p>Kenny</p>
            <a href="https://github.com/kphiri84">
              <img
                className="github"
                src="https://www.iconsdb.com/icons/preview/white/github-11-xxl.png"
                alt="GitHub"
              />
            </a>
            <a href="https://www.linkedin.com/in/kenny-phiri/">
              <img
                className="linkedin"
                src="https://img.icons8.com/ios/100/000000/linkedin.png"
                alt="Linked In"
              />
            </a>
          </div>
          <div className="contactData">
            <p>David</p>
            <a href="https://github.com/davidRbn">
              <img
                className="github"
                src="https://www.iconsdb.com/icons/preview/white/github-11-xxl.png"
                alt="GitHub"
              />
            </a>
            <a href="https://www.linkedin.com/in/david-ruben/">
              <img
                className="linkedin"
                src="https://img.icons8.com/ios/100/000000/linkedin.png"
                alt="Linked In"
              />
            </a>
          </div>
          <div className="contactData">
            <p>Anthony</p>
            <a href="https://github.com/AnthoLbz">
              <img
                className="github"
                src="https://www.iconsdb.com/icons/preview/white/github-11-xxl.png"
                alt="GitHub"
              />
            </a>
            <a href="https://www.linkedin.com/in/anthony-lasbleiz">
              <img
                className="linkedin"
                src="https://img.icons8.com/ios/100/000000/linkedin.png"
                alt="Linked In"
              />
            </a>
          </div>
        </section>
      </h2>
      <div className="playlistContact">
        <PlayList />
      </div>
    </div>
  );
};
export default Contact;
