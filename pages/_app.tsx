import { 
  ChakraProvider,  
  Container 
} from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Navbar, Footer } from '../components';
import { ColorProvider } from '../context/ColorContext';
import { FontProvider } from '../context/FontContext';
import { Fonts, theme } from '../lib';

// import '../styles/carousel.css'

function MyApp({ Component, pageProps, router }: AppProps) {
  const displayFooter = (router.pathname === '/' || router.pathname === '/contact') ? 'none' : 'flex';
  
  return (
    <ChakraProvider theme={theme}>
      <ColorProvider>
        <FontProvider>
          <Fonts/>

          <Head>
            <title>Ivus Chua 🏠</title>
          </Head>

          <main>
            <Navbar/>
            <Container maxW={{base: '95%', md: '80%', lg: '80%'}} textAlign={'start'}>
              <AnimatePresence
                exitBeforeEnter
                initial={true}
                onExitComplete={() => {
                  if (typeof window !== 'undefined') {
                    window.scrollTo({ top: 0 })
                  }
                }}
              >
                <Component {...pageProps} key={router.route} />
              </AnimatePresence>
            </Container>
          </main>

          <Footer display={displayFooter}/>
        </FontProvider>
      </ColorProvider>
    </ChakraProvider>
  )
}

export default MyApp
