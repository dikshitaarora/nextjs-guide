import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  pageProps.title = 'My title'
  return <Component {...pageProps} />
}

export default App
