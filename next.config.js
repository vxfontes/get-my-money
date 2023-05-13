/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // para baixar imagens ou referencia-las
  images: {
    domains: [
      'source.unsplash.com',
      'images.unsplash.com',
      'lh3.googleusercontent.com',
    ]
  }
}

module.exports = nextConfig
