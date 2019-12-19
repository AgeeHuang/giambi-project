import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGlobalContext } from '../../store';

const Home: React.FC<{}> = () => {
  const { dispatch } = useGlobalContext();
  return (
    <Fragment>
      <div className="page-home__name">
        <p className="page-home__full-name">Giambi</p>
        <p className="page-home__location">@Taipei, Taiwan</p>
      </div>
      <nav className="page-home__nav">
        <div
          className="page-home__nav-option"
          onClick={() => dispatch({ type: 'HANDLE_CONTENT', payload: 'about' })}
        >
          <span className="page-home__nav-icon">
            <FontAwesomeIcon icon={['fas', 'laptop-code']} />
          </span>
          <span className="page-home__nav-name">
            Web developer
          </span>
        </div>
        <div
          className="page-home__nav-option"
          onClick={() => dispatch({ type: 'HANDLE_CONTENT', payload: 'experinces' })}
        >
          <span className="page-home__nav-icon">
            <FontAwesomeIcon icon={['fas', 'project-diagram']} />
          </span>
          <span className="page-home__nav-name">
            Experinces
          </span>
        </div>
        <div
          className="page-home__nav-option"
          onClick={() => dispatch({ type: 'HANDLE_CONTENT', payload: 'contact' })}
        >
          <span className="page-home__nav-icon">
            <FontAwesomeIcon icon={['fas', 'retweet']} />
          </span>
          <span className="page-home__nav-name">
            Contact Me
          </span>
        </div>
      </nav>
    </Fragment>
  );
}

export default Home;
