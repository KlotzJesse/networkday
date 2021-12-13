import SEO from "@lib/next-seo.config";
import "@styles/globals.css";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";

function NetworkDayApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        {/* <title>#NetworkDay</title> */}
        <meta charSet="utf-8"></meta>
        <meta httpEquiv="Content-Language" content="de" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <meta
          name="description"
          content="Das Digital Event zur Nachhaltigkeit als Wirtschaftsfaktor im Außer-Haus-Markt."
        ></meta> */}
      </Head>
      <DefaultSeo {...SEO} />

      <Component {...pageProps} />
    </div>
  );
}

export default NetworkDayApp;
