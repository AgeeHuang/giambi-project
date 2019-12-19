import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact: React.FC<{}> = () => {
  return (
    <div className="page-contact">
      <div className="page-contact__social-media">
        <a
          className="page-contact__link"
          href="//www.linkedin.com/in/giambi-dipp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="page-contact__icon"
            icon={['fab', 'linkedin']}
          />
        </a>
        <a
          className="page-contact__link"
          href="//github.com/AgeeHuang"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="page-contact__icon"
            icon={['fab', 'github-square']}
          />
        </a>
        <a
          className="page-contact__link"
          href="//www.facebook.com/mingweih2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="page-contact__icon"
            icon={['fab', 'facebook-square']}
          />
        </a>
      </div>
      <div className="page-contact__resume">
        <a
          className="page-contact__resume-link"
          target="_blank"
          href="srv-file5.gofile.io/download/uVs0sc/Giambi.pdf"
        >
          <span>
            <FontAwesomeIcon
              icon={['fas', 'arrow-alt-circle-down']}
            />
          </span>
          <span>
            RESUME
          </span>
        </a>
      </div>
    </div>
  );
}

export default Contact;
