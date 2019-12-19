import React from 'react';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About: React.FC<{}> = () => {
  const icons = [
    ['fab', 'js-square'],
    ['fab', 'html5'],
    ['fab', 'css3-alt'],
    ['fab', 'react'],
    ['fab', 'sass'],
    ['fab', 'node-js'],
  ];
  return (
    <div className="page-about">
      {
        icons.map((icon: [IconPrefix, IconName]) => (
          <FontAwesomeIcon
            key={icon[1]}
            className="page-about__icon"
            icon={icon}
          />
        ))
      }
    </div>
  );
}

export default About;
