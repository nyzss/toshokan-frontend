import type { AppProps } from 'next/app'
import { ChakraProvider, Spinner } from '@chakra-ui/react'

import Head from 'next/head'
import Theme from "../utils/Theme"
import Navbar from '../components/Layout/Navbar/Navbar'
import Footer from '../components/Layout/Footer/Footer'

import '../styles/globals.css'
import "focus-visible/dist/focus-visible"
import "../utils/i18n"
import { Suspense } from 'react'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
          <link rel="shortcut icon" href="/32x.png" type="image/x-icon" />
    </Head>
      <ChakraProvider theme={Theme}>
        <Suspense fallback={<Spinner />}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        </Suspense>
    </ChakraProvider>
    </>
  )
}
export default MyApp
