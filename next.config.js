/** @type {import('next').NextConfig} */
module.exports = {
  //swcMinify: true, : disable as long as buggy
  rewrites: async () => [
    {
      source: "/sitemap.xml",
      destination: "/api/sitemap",
    },
  ],
  i18n: {
    locales: ["de-DE"],
    defaultLocale: "de-DE",
  },
  experimental: {
    concurrentFeatures: true,
    serverComponents: true,
    reactRoot: true,
  },
  images: {
    formats: ["image/webp", "image/avif"],
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
