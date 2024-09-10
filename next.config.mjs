// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "**",
        },{ protocol: "https", hostname: "res.cloudinary.com" }],
        
        
    },
    webpack(config) {
        config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
        };
        return config;
    },
};
    
export default nextConfig;