import React from 'react';
import dipp from '../../assets/dipp_color.png';
import eztravel from '../../assets/eztravel.png';
import sparkamplify from '../../assets/sparkamplify.jpg';

const defaultImg = {
  src: "https://via.placeholder.com/150",
  width: 50,
  height: 50,
};
const Experinces: React.FC<{}> = () => {
  return (
    <section className="page page-experinces">
      
          <aside className="page-experinces__logo page-experinces__dipp-logo">
            <a
              className="page-experinces__link"
              href="//marketing.withdipp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure>
                <img {...defaultImg} alt="dipp logo" />
                <figcaption>Dipp</figcaption>
              </figure>
            </a>
          </aside>
          <aside className="page-experinces__logo page-experinces__sa-logo">
            <a
              className="page-experinces__link"
              href="//www.sparkamplify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure>
                <img {...defaultImg} alt="sparkamplify logo" />
                <figcaption>SparkAmplify</figcaption>
              </figure>
            </a>
          </aside>
          <aside className="page-experinces__logo  page-experinces__ez-logo">
            <a
              className="page-experinces__link"
              href="//www.eztravel.com.tw/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure>
                <img {...defaultImg} alt="eztravel logo" />
                <figcaption>EzTravel</figcaption>
              </figure>
            </a>
          </aside>
    </section>
  );
}

export default Experinces;
