import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../client/App';

export default () => {
  const GLOBAL_STATE = {}
  const html = renderToString(<App />)
  let styleTag = '';
  if (process.env.NODE_ENV !== 'development') {
    styleTag = '<link rel="stylesheet" href="/styles.css">';
  }
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Giambi Huang</title>
        ${styleTag}
        <script>
        GLOBAL_STATE = ${JSON.stringify(GLOBAL_STATE)};
        </script>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/client.js"></script>
      </body>
    </html>
  `;
}
