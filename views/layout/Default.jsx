import React from 'react';

module.exports = function Default({ children }) {
  return (
    <div>
      <html>
        <head>
          <meta charSet="utf-8" />
          {/* <link rel="icon" href="./assets/favicon.ico" /> */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Dev Squared is a developer's greatest asset for development!" />
          <meta name="og:description" content="Dev Squared is a developer's greatest asset for development!"/>
          <meta name="og:title" content="Dev Squared"/>
          <meta name="og:image" content="./assets/dev_squared.png"/>
          {/* <link rel="apple-touch-icon" href="./assets/favicon.ico" /> */}
          <title>Dev Squared</title>
        </head>
        <body>
            { children }
        </body>
      </html>
    </div>
  );
};