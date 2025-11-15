import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 
    images: {
        remotePatterns: [
          {
            protocol: 'https',
        
            port: '', // Leave empty if no specific port
        
          }
        ],
}
}
export default nextConfig;
