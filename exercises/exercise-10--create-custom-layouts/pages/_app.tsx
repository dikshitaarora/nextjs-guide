import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

// ✍️ import the custom layout
// import Layout from '../src/components/layout'
import { ReactElement } from 'react'
import { NextPage } from 'next'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  // ✍️ wrap the Component with the custom layout

  /** Single Shared Layout */
  // return (
  //   <ChakraProvider>
  //     <Layout>
  //       <Component {...pageProps} />
  //     </Layout>
  //   </ChakraProvider>
  // )

  /** Per page layout */

  const getLayout = Component.getLayout ?? ((page: ReactElement) => page)
  return (
    <ChakraProvider>{getLayout(<Component {...pageProps} />)}</ChakraProvider>
  )
}

export default App
