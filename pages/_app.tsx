import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'

import Theme from "../utils/Theme"
import Navbar from '../components/Layout/Navbar/Navbar'
import "focus-visible/dist/focus-visible"



const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
          <link rel="shortcut icon" href="32x.png" type="image/x-icon" />
    </Head>
      <ChakraProvider theme={Theme}>
        <Navbar />
    <Component {...pageProps} />
    </ChakraProvider>
    </>
  )
}
export default MyApp
