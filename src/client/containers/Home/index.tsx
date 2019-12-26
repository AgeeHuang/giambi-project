import React, { Fragment } from 'react';
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
            <i className="fas fa-laptop-code fa-sm" />
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
            <i className="fas fa-project-diagram fa-sm" />
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
            <i className="fas fa-retweet fa-sm" />
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
