/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/visa-medicals',
        destination: '/visa-medical-calgary',
        permanent: true
      },
      {
        source: '/services/details/visa-medical-experts',
        destination: '/visa-medical-calgary',
        permanent: true
      },
      {
        source: '/services/details/panel-physician-appointments',
        destination: '/ircc-panel-physician-calgary',
        permanent: true
      }
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io'
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ]
  }
}

export default nextConfig
