import { Head, Html, Main, NextScript } from 'next/document'

/**
 * Document renders only in server
 * It is used to augment your application's <html> and <body> tags
 *
 * onclick will not work in this file
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="icon"
          href="https://png.pngtree.com/png-clipart/20220730/original/pngtree-fresh-croissant-icon-cartoon-style-with-shadow-free-vector-and-png-png-image_8442656.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
