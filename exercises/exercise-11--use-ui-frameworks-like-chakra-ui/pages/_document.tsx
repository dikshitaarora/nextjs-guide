// ✍️ import the ColorModeScript from '@chakra-ui/react
import { ColorModeScript } from '@chakra-ui/react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

// ✍️ import the theme from the theme.ts file
import theme from '../theme'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          {/* ✍️ add the ColorModeScript and set its initialColorModeProp to theme.config.initialColorMode */}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          {/* ✍️ add the Main and NextScript components */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
