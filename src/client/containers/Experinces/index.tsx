import React from 'react';
import dipp from '../../assets/dipp_color.png';
import eztravel from '../../assets/eztravel.png';
import sparkamplify from '../../assets/sparkamplify.jpg';

const Experinces: React.FC<{}> = () => {
  return (
    <div className="page-experinces">
      <ul className="page-experinces__list">
        <li className="page-experinces__list-item">
          <aside className="page-experinces__logo">
            <a
              className="page-experinces__link"
              href="//marketing.withdipp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure>
                <img
                  src={dipp}
                  width={50}
                  height={50}
                  alt="dipp logo"
                />
                <figcaption>Dipp</figcaption>
              </figure>
            </a>
          </aside>
          <section className="page-experinces__desc">
            <h3 className="page-experinces__job-title">
              Software Engineer
            </h3>
            <h4 className="page-experinces__time">
              May 2018 - Present
            </h4>
            <h4 className="page-experinces__location">
              Taipei, Taiwan
            </h4>
          </section>
        </li>
        <li className="page-experinces__list-item">
          <aside className="page-experinces__logo">
            <a
              className="page-experinces__link"
              href="//www.sparkamplify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure>
                <img
                  src={sparkamplify}
                  width={50}
                  height={50}
                  alt="sparkamplify logo"
                />
                <figcaption>SparkAmplify</figcaption>
              </figure>
            </a>
          </aside>
          <section className="page-experinces__desc">
            <h3 className="page-experinces__job-title">
              Frontend Engineer
            </h3>
            <h4 className="page-experinces__time">
              May 2017 - May 2018
            </h4>
            <h4 className="page-experinces__location">
              Taipei, Taiwan
            </h4>
          </section>
        </li>
        <li className="page-experinces__list-item">
          <aside className="page-experinces__logo">
            <a
              className="page-experinces__link"
              href="//www.eztravel.com.tw/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure>
                <img
                  src={eztravel}
                  width={50}
                  height={50}
                  alt="eztravel logo"
                />
                <figcaption>EzTravel</figcaption>
              </figure>
            </a>
          </aside>
          <section className="page-experinces__desc">
            <h3 className="page-experinces__job-title">
              Frontend Engineer
            </h3>
            <h4 className="page-experinces__time">
              Jan 2015 - May 2017
            </h4>
            <h4 className="page-experinces__location">
              Taipei, Taiwan
            </h4>
          </section>
        </li>
      </ul>
    </div>
  );
}

export default Experinces;
