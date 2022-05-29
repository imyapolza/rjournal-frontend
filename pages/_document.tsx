import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

function MyDocument() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        {/*Below we add the modal wrapper*/}
        <div id="modal-root"></div>
      </body>
    </Html>
  );
}

export default MyDocument;
