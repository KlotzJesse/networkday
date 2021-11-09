import type { AppProps } from "next/app";

import "../styles/globals.css";

function NetworkDayApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default NetworkDayApp;
