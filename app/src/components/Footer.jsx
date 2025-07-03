import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faYoutube,
  faDiscord,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { fa1, faEnvelope, faV } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p className="footer-left">
          © {year} Ali Khan — Made with <span className="heart">♥</span>
        </p>
        <div className="footer-right">
          <a
            href="https://www.linkedin.com/in/alik070"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>



          <a
            href="https://github.com/AliK070"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a
            href="https://www.youtube.com/@ak0tecforge"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
         
          <a
            href="mailto:alikhanpro60@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>

          <a
            href="https://alik070.github.io/Alis-Portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="V1 Portfolio"
          >
            <FontAwesomeIcon icon={faV} />
            <FontAwesomeIcon icon={fa1} />
          </a>
        </div>
      </div>
    </footer>
  );
}
