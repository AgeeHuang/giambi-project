import React from 'react';
import cx from 'classnames';
import { Element } from 'react-scroll';

const Contact: React.FC<{}> = () => {
  const defaultIconClass = 'page-contact__icon';
  return (
    <Element name="contact">
      <section className="page page-contact">
        <div className="page-contact__wrap">
          <div className="page-contact__contact-me">
            Contact Me
          </div>
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
        </div>
      </section>
    </Element>
  );
}

export default Contact;
