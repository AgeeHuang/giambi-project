import React from 'react';
import cx from 'classnames';

const Contact: React.FC<{}> = () => {
  const defaultIconClass = 'page-contact__icon';
  return (
    <div className="page-contact">
      <div className="page-contact__social-media">
        <a
          className="page-contact__link"
          href="//www.linkedin.com/in/giambi-dipp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className={cx(
              defaultIconClass,
              'fab fa-linkedin',
            )}
          />
        </a>
        <a
          className="page-contact__link"
          href="//github.com/AgeeHuang"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className={cx(
              defaultIconClass,
              'fab fa-github-square',
            )}
          />
        </a>
        <a
          className="page-contact__link"
          href="//www.facebook.com/mingweih2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className={cx(
              defaultIconClass,
              'fab fa-facebook-square',
            )}
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
            <i className="fas fa-arrow-alt-circle-down fa-sm" />
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
