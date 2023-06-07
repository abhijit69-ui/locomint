const dedicatedEndPoint = 'https://abhijit-crypto.infura-ipfs.io';
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [dedicatedEndPoint, 'abhijit-crypto.infura-ipfs.io'],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};
module.exports = nextConfig;
