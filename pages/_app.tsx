import {ThemeProvider} from 'next-themes';
import '../styles/global.scss';
import React from 'react';
import Head from 'next/head';

export default function App({Component, pageProps}) {
  return (
    <React.Fragment>
      <Head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'
          crossOrigin='anonymous'
          referrerPolicy='no-referrer'
        />
      </Head>
      <ThemeProvider defaultTheme='dark'>
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}
