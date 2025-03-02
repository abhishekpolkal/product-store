/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',    // This tells Next.js to output static files
    images: {
        unoptimized: true // This disables Next.js image optimization (required for static export to work correctly on GitHub Pages)
    },
    assetPrefix: './',    // This fixes asset paths for subfolder hosting (like in GitHub Pages)
    trailingSlash: true   // Ensures folders get `index.html` correctly (important for product detail pages)
};

module.exports = nextConfig;
