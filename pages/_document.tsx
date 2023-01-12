import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import React from 'react';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'className="bg-gray-300">
        <Head>
          <meta charSet='utf-8' />
        </Head>
        <body>
          <Main />
          <NextScript />
         
        </body>
      </Html>
    );
  }
}

export default MyDocument;
