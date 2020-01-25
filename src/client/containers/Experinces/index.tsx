import React from 'react';
import { Element } from 'react-scroll';
import Experince from './Experince';
import dipp from '../../assets/dipp_color.png';
import eztravel from '../../assets/ez.png';
import sparkamplify from '../../assets/sa.png';

const Experinces: React.FC<{}> = () => {
  const experinces = [
    {
      className: 'page-experinces__ez-logo',
      data: {
        resource: eztravel,
        link: '//www.eztravel.com.tw/',
        alt: 'ezTravel logo',
        company: 'EzTravel',
        role: 'Frontend Developer',
        dates: 'Jan 2015 - April 2017',
        location: 'Taipei, TW',
      },
    },
    {
      className: 'page-experinces__sa-logo',
      data: {
        resource: sparkamplify,
        link: '//www.sparkamplify.com/',
        alt: 'sparkamplify logo',
        company: 'SparkAmplify',
        role: 'Frontend Developer',
        dates: 'May 2017 - May 2018',
        location: 'Taipei, TW',
      },
    },
    {
      className: 'page-experinces__dipp-logo',
      data: {
        resource: dipp,
        link: '//marketing.withdipp.com/',
        alt: 'dipp logo',
        company: 'Dipp',
        role: 'Software Engineer',
        dates: 'May 2018 - Present',
        location: 'Taipei, TW',
      },
    },
  ];
  return (
    <Element name="work">
      <section className="page page-experinces">
        {
          experinces.map(experince => (
            <Experince
              key={experince.className}
              {...experince}
            />
          ))
        }
      </section>
    </Element>
  );
}

export default Experinces;
