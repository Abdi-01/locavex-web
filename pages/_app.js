import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';


// Google Analytics Import
import * as gtag from "../lib/gtag"
import Script from 'next/Script';


function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Ketika ada perubahan di route, akan trigger useEffect
  useEffect(() => {
    console.log("CEK GA ID", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS)
    const handleRouteChange = (url) => {
      console.log("CEK ROUTE PAGE GA", url)
      gtag.pageview(url);
    };
    console.log("CEK ROUTE ", router.events)
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ChakraProvider>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="gtag-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
  
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
          `}
      </Script>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
