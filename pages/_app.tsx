import { useEffect } from 'react'
import type { AppProps /*, AppContext */ } from 'next/app'
import { ThemeProvider } from '@material-ui/core/styles'

import theme from '../src/theme'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  },[])

  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
