import React from 'react';
import cx from 'classnames';

const About: React.FC<{}> = () => {
  const icons = [
    ['fab', 'fa-js-square', 'fa-sm'],
    ['fab', 'fa-html5', 'fa-sm'],
    ['fab', 'fa-css3-alt', 'fa-sm'],
    ['fab', 'fa-react', 'fa-sm'],
    ['fab', 'fa-sass', 'fa-sm'],
    ['fab', 'fa-node-js', 'fa-sm'],
  ];
  return (
    <div className="page-about">
      {
        icons.map(icon => (
          <i
            key={icon[1]}
            className={cx(
              icon.join(' '),
              'page-about__icon',
            )}
          />
        ))
      }
    </div>
  );
}

export default About;
