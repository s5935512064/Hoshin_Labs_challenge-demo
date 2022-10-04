import React, { useState, useEffect, useRef } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1400,
    });
  }, []);

  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
