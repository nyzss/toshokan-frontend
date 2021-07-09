import { ChakraProvider } from '@chakra-ui/react'
import "focus-visible/dist/focus-visible"
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import nprogress from "nprogress"
import { QueryClient, QueryClientProvider } from 'react-query'
import CheckLogin from '../components/Authentification/CheckLogin'
import Footer from '../components/Layout/Footer/Footer'
import Navbar from '../components/Layout/Navbar/Navbar'
import '../styles/globals.css'
import "../styles/nprogress.css"
import "../utils/i18n"
import Theme from "../utils/Theme"


const queryClient = new QueryClient()

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  nprogress.start()
})
Router.events.on('routeChangeComplete', () => nprogress.done())
Router.events.on('routeChangeError', () => nprogress.done())

nprogress.configure({
  showSpinner: false
})

const MyApp = ({ Component,  pageProps }: AppProps) => {
  return (
    <>
      <Head>
          <link rel="shortcut icon" href="/32x.png" type="image/x-icon" />
    </Head>
      <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={Theme}>
        <Navbar />
        <CheckLogin/>
        <Component {...pageProps} />
        <Footer />
    </ChakraProvider>
    </QueryClientProvider>
    </>
  )
}
export default MyApp
