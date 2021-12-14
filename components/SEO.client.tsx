import { NextSeo } from "next-seo";
import React from "react";

interface SEOProps {
  title?: string;
  description?: string;
  canonical: string;
}

export const SEO = (props: SEOProps) => {
  return (
    <div>
      <NextSeo
        canonical={props.canonical}
        title={props.title}
        description={props.description}
      />
    </div>
  );
};

export default SEO;
