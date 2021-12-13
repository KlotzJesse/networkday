import "@styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function NetworkDayApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>#NetworkDay</title>

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
