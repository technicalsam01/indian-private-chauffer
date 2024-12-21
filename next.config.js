/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        // You don't need the domains or remotePatterns section if you're using internal images
    },
    experimental: {
        middleware: false, // Disable middleware if it's not needed
    },
}

module.exports = nextConfig;
