import React from 'react';
import { Link } from 'react-scroll';

import giambi from '../../assets/giambi.jpg';
// import { useGlobalContext } from '../../store';

const Home: React.FC<{}> = () => {
  // const { dispatch } = useGlobalContext();
  const style = { backgroundImage: `url(${giambi})`};
  return (
    <section className="page page-home">
      <div className="page-home__greeting">
        <h1 className="page-home__full-name">
          <p>Giambi</p>
          <p>Huang</p>
        </h1>
        <h2 className="page-home__job-title">
          WEB DEVELOPER
        </h2>
      </div>
      <div className="page-home__avatar" style={style} />
      <div className="page-home__nav">
        <ul className="page-home__ul">
          <li className="page-home__li">
            <Link
              spy
              smooth
              to="about"
              duration={500}
            >
              ABOUT
            </Link>
          </li>
          <li className="page-home__li">
            <Link
              spy
              smooth
              to="work"
              duration={500}
            >
              WORK
            </Link>
          </li>
          <li className="page-home__li">
            <Link
              spy
              smooth
              to="contact"
              duration={500}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Home;
