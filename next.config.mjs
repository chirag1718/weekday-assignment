/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "https",
                hostname: "logo.clearbit.com",
            },
        ],
    },
};

export default nextConfig;
