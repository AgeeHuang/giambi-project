import React from 'react';
import { Element } from 'react-scroll';
import me from '../../assets/me.png';

const About: React.FC<{}> = () => {
  return (
    <Element name="about">
      <section className="page page-about">
        <div className="page-about__social">
          <figure>
            <img
              src={me}
              alt="giambi"
              className="page-about__my-pic"
            />
          </figure>
        </div>
        <ul className="page-about__ul">
          <li className="page-about__li">
            <p>Hi, My name is <strong className="page-about__point">Giambi Huang</strong></p>
            <p>I am a <strong className="page-about__point">web developer</strong></p>
          </li>
          <li className="page-about__li">
            <i className="fas fa-map-marked-alt" />
            <p className="page-about__point">Taipei, Taiwan</p>
          </li>
          <li className="page-about__li">
            <i className="fas fa-laptop-code" />
            <p className="page-about__point">Skills</p>
            <ul className="page-about__tags">
              <li className="page-about__tag">HTML5</li>
              <li className="page-about__tag">CSS3</li>
              <li className="page-about__tag">Javascript</li>
              <li className="page-about__tag">React.js</li>
              <li className="page-about__tag">Node.js</li>
              <li className="page-about__tag">Firebase</li>
            </ul>
          </li>
          <li className="page-about__li">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="page-about__download"
              href="//srv-file5.gofile.io/download/uVs0sc/Giambi.pdf"
            >
              <i className="fas fa-arrow-alt-circle-down" />
              <p className="page-about__download-text">My resume</p>
            </a>
          </li>
        </ul>
      </section>
    </Element>
  );
}

export default About;
