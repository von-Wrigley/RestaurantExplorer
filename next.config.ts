import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  cacheComponents: true,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: new URL(process.env.SUPABASE_URL!).hostname, 
            port: '', 
        
          }
        ],
}
}
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
