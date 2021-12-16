const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "Content-Security-Policy",
    value:
      "connect-src 'self'; style-src 'unsafe-inline';base-uri 'self';form-action 'self'",
  },
];

/** @type {import('next').NextConfig} */
module.exports = {
  //swcMinify: true, : disable as long as buggy
  reactStrictMode: true,
  rewrites: async () => [
    {
      source: "/sitemap.xml",
      destination: "/api/sitemap",
    },
  ],
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
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};
