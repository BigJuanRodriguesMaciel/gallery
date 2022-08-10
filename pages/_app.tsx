import type { AppProps } from 'next/app'
import { GlobalStyle } from '../src/styles/global'
import { defaultTheme } from '../src/styles/themes/default'
import { ThemeProvider } from 'styled-components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
