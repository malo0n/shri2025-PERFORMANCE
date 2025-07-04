/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Use static export
  basePath: process.env.BASE_URL, // Base path for the app
  distDir: 'out', // Output directory for static files
  reactStrictMode: true, // Enable React strict mode
  experimental: {
    optimizeCss: true, // Optimize and minify CSS
  },
  images: {
    formats: ['image/avif', 'image/webp'], // Use modern image formats
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  poweredByHeader: false, // Remove X-Powered-By header
  compress: true, // Enable brotli compression
  productionBrowserSourceMaps: false, // Disable source maps in prod
};
 
export default nextConfig