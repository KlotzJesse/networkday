/** @type {import('next').NextConfig} */
module.exports = {
  optimizeFonts: true,
  experimental: {
    concurrentFeatures: true,
    // optimizeCss: true,
    //optimizeImages: true,
    serverComponents: true,
  },
  images: {
    domains: [
      "images.unsplash.com",
      "a.storyblok.com",
      "source.unsplash.com",
      "www.homann-foodservice.de",
      "images.pexels.com",
      "image.jimcdn.com",
      "www.gastronomy.world",
      "mir-s3-cdn-cf.behance.net",
    ],
  },
};
