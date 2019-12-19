import React, { Fragment } from 'react';
import cx from 'classnames';

import { useGlobalContext } from '../store';
import Home from '../containers/Home';
import About from '../containers/About';
import Contact from '../containers/Contact';
import Experinces from '../containers/Experinces';

const Routes: React.FC<{}> = () => {
  const { state } = useGlobalContext();
  const routes = [
    {
      name: 'home',
      container: <Home />,
    },
    {
      name: 'about',
      container: <About />,
    },
    {
      name: 'experinces',
      container: <Experinces />,
    },
    {
      name: 'contact',
      container: <Contact />,
    },
  ];
  return (
    <Fragment>
      {
        routes.map(route => (
          <div
            key={route.name}
            className={cx(
              'page',
              { 'page--active': route.name === state.content },
            )}
          >
            {route.container}
          </div>
        ))
      }
    </Fragment>
  );
}

export default Routes;
