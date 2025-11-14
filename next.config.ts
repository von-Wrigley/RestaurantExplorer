import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'pftyuweccxmoqawroech.supabase.co', // Replace with the actual hostname of your image source
            port: '', // Leave empty if no specific port
        
          }
        ],
}
}
export default nextConfig;
