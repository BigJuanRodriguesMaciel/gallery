import type { AppProps } from 'next/app'
import { GlobalStyle } from '../src/styles/global'
import { defaultTheme } from '../src/styles/themes/default'
import { ThemeProvider } from 'styled-components'
import { QueryClient, QueryClientProvider } from 'react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider key="theme" theme={defaultTheme}>
          <GlobalStyle />
          <Component {...pageProps} />
          {/* <ReactQueryDevtools/> */}
      </ThemeProvider>
    </QueryClientProvider>
  )

}
export default MyApp
