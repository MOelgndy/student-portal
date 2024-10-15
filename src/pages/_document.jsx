import { Html, Head, Main, NextScript } from 'next/document';

const lang = 'en';
const dir = 'ltr';

export default function Document() {
  return (
    <Html lang={lang}>
      <Head />

      <body dir={dir}>
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
