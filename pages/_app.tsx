import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

function NetworkDayApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>#NetworkDay</title>
        <meta name="description">
          Das Digital Event zur Nachhaltigkeit als Wirtschaftsfaktor im
          Außer-Haus-Markt.
        </meta>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default NetworkDayApp;
