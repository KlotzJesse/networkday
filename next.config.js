/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: false, //: disable as long as buggy
  reactStrictMode: true,
  rewrites: async () => [
    {
      source: "/sitemap.xml",
      destination: "/api/sitemap",
    },
  ],
  experimental: {
    serverComponents: true,
    runtime: "edge",
  },
  images: {
    formats: ["image/webp"],
    domains: [
      "images.unsplash.com",
      "a.storyblok.com",
      "source.unsplash.com",
      "www.homann-foodservice.de",
      "images.pexels.com",
      "image.jimcdn.com",
      "www.gastronomy.world",
      "mir-s3-cdn-cf.behance.net",
      "www.byodo.de",
    ],
  },
};
