import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

export function reportWebVitals(metric) {
  console.log(metric);
}

function NetworkDayApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>#NetworkDay</title>
        <meta httpEquiv="Content-Language" content="de" />
        <meta
          name="description"
          content="Das Digital Event zur Nachhaltigkeit als Wirtschaftsfaktor im Außer-Haus-Markt."
        ></meta>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default NetworkDayApp;
