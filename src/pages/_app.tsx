import  Head  from 'next/head';
import { CalculatorProvider } from '../hooks/CalculatorContext';

import GlobalStyle from '../styles/GlobalStyle';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GlobalStyle />
      <CalculatorProvider>
        <Component {...pageProps} />
      </CalculatorProvider>      
    </>
  )
}

export default MyApp
