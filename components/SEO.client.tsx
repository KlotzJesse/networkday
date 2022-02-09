import { NextSeo } from "next-seo";
import React from "react";

interface SEOProps {
  title?: string;
  description?: string;
  canonical: string;
}

export default function SEO(props: SEOProps) {
  return (
    <NextSeo
      canonical={props.canonical}
      title={props.title}
      description={props.description}
    />
  );
}
