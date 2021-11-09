/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    concurrentFeatures: true,
    serverComponents: true,
    reactRoot: true,
  },
  images: {
    domains: ["images.unsplash.com", "a.storyblok.com"],
  },
};
