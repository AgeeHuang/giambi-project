import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../client/App';

export default (manifest: any) => {
  const html = renderToString(<App />)
  const GLOBAL_STATE = {}
  const styleChunks = [];
  const jsChunks = [];
  const chunks = Object.keys(manifest);
  for (const idx in chunks) {
    const chunk = chunks[idx];
    if (chunk.endsWith('.js')) {
      jsChunks.push(`<script src="${manifest[chunk]}"></script>`);
    }
    if (chunk.endsWith('.css')) {
      styleChunks.push(`<link rel="stylesheet" href="${manifest[chunk]}">`);
    }
  }

  // if (process.env.NODE_ENV !== 'development') {
  //   styleTag = '<link rel="stylesheet" href="/styles.css">';
  // }
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Giambi Huang</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Giambi's personal website">
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1">
        <meta name="url" content="https://giambihuang.com">
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32">
        ${styleChunks.join('')}
        <script>
          GLOBAL_STATE = ${JSON.stringify(GLOBAL_STATE)};
        </script>
      </head>
      <body>
        <div id="root">${html}</div>
        ${jsChunks.join('')}
      </body>
    </html>
  `;
}
