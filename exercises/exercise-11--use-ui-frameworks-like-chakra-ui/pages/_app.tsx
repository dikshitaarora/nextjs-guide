import type { AppProps } from 'next/app'
// ✍️ import the ChakraProvider from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'

// ✍️ import the theme from the theme.ts file
import theme from '../theme'

const App = ({ Component, pageProps }: AppProps) => {
  // ✍️ wrap the Component with ChakraProvider and set its theme prop to theme
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
