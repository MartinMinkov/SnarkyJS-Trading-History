import "../styles/globals.css";
import "../styles/date-picker.css";

import type { AppProps } from "next/app";

import Script from "next/script";
import { useState, useEffect } from "react";
import { SnarkyProvider } from "../context/snarky";

function MyApp({ Component, pageProps }: AppProps) {
  const [snarkyLoaded, setSnarkyLoaded] = useState(false);

  useEffect(() => {
    const initSnarky = async () => {
      await window.initSnarkyJS();
      setSnarkyLoaded(true);
    };
    initSnarky();
  }, []);

  return (
    <SnarkyProvider loaded={snarkyLoaded}>
      <Script
        src="/plonk_init.js"
        strategy="beforeInteractive"
        type="module"
      ></Script>
      <Script
        strategy="lazyOnload"
        src="https://platform.twitter.com/widgets.js"
      />
      <Component {...pageProps} />
    </SnarkyProvider>
  );
}

export default MyApp;
