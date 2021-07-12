import { ChakraProvider } from '@chakra-ui/react'
import "focus-visible/dist/focus-visible"
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import nprogress from "nprogress"
import { QueryClient, QueryClientProvider } from 'react-query'
import CheckLogin from '../components/Authentification/CheckLogin'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Preloader from '../components/Preloader'
import '../styles/globals.css'
import "../styles/nprogress.css"
import "../utils/i18n"
import Theme from "../utils/Theme"


const queryClient = new QueryClient()

Router.events.on('routeChangeStart', (url) => nprogress.start())
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
          <Preloader>
        <Navbar />
        <CheckLogin/>
        <Component {...pageProps} />
        <Footer />
        </Preloader>
    </ChakraProvider>
    </QueryClientProvider>
    </>
  )
}
export default MyApp
