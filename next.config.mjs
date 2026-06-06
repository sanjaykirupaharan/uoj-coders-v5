/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // assetPrefix: '/',
  trailingSlash: true,
  experimental: {
    viewTransition: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: true
  },

};

export default nextConfig;
