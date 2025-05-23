import type { AppProps } from 'next/app'
// ✍️ import the global stylesheet
import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App
