import React from 'react';
import cx from 'classnames';

// import LightSwitch from '../LightSwitch';
import { useGlobalContext } from '../../store';

const Layout: React.FC<{}> = ({ children }) => {
  const { state } = useGlobalContext();
  const { turnOn } = state;
  return (
    <div
      className={cx(
        'main-theme',
        { 'main-theme--night': !turnOn },
      )}
    >
      <div className="main-theme__body">
        {/* {<header
          className={cx(
            'page-home__header',
            { 'page-home__header--hidden': content === 'home' },
          )}
        >
          <div
            className="page-home__back-btn"
            onClick={() => dispatch({ type: 'HANDLE_CONTENT', payload: 'home' })}
          >
            Back
          </div>
        </header>} */}
        {children}
        <footer className="page-footer">
          Copyrights © 2019 All Rights Reserved by Giambi Huang
        </footer>
      </div>
    </div>
  );
}

export default Layout;
