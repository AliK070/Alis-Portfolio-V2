import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faYoutube,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
            href="https://www.youtube.com/@alik070"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a
            href="https://discord.com/users/yourdiscordid"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
          >
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a
            href="mailto:your.email@example.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </footer>
  );
}
