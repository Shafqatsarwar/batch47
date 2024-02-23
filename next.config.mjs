/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "full-stack-ecommerce-clothing-web.vercel.app",
        },
        {
          protocol: "https",
          hostname: "funsies.pk",
        },
        {
          protocol: "https",
          hostname: "cdn.sanity.io",
        },
      ],
    },
  };
  
  export default nextConfig;