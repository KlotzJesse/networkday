import { GetStaticProps } from "next";
import React from "react";

const EXTERNAL_DATA_URL = "https://jsonplaceholder.typicode.com/posts";

const createSitemap = (posts) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${posts
          .map(({ id }) => {
            return `
                <url>
                    <loc>${`${EXTERNAL_DATA_URL}/${id}`}</loc>
                </url>
            `;
          })
          .join("")}
    </urlset>
    `;

export const getStaticProps: GetStaticProps = async (context) => {
  const request = await fetch(EXTERNAL_DATA_URL);
  const posts = await request.json();
  console.log(posts[0].userId);

  return {
    props: {
      posts,
    },
  };
};

export default function Sitemap({ data }) {
  return (
    <div>
      <p>{data[0].userId}</p>
    </div>
  );
}
