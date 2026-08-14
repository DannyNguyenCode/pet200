/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            { source: "/quest-log", destination: "/quests/familiar-log", permanent: false },
            { source: "/quest/wilderness", destination: "/quests/wilderness", permanent: false },
        ];
    },
    images: {
        remotePatterns: [{
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "**",
        },{ protocol: "https", hostname: "res.cloudinary.com" }],
        
        
    },
};
    
export default nextConfig;
