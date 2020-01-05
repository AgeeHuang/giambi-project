import React from 'react';
import { hydrate } from 'react-dom';
import App from './App';

hydrate(
  <App />,
  document.getElementById('root'),
);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    hydrate(<NextApp />, document.getElementById('root'));
  });
}
