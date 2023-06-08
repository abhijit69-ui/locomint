require('@nomiclabs/hardhat-waffle');
const fs = require('fs');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const privateKey = fs.readFileSync('.secret').toString().trim();
const etherscanApiKey = process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY_SECRET;
const apiUrl = process.env.API_URL;

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    sepolia: {
      url: apiUrl,
      accounts: [privateKey],
    },
  },
  etherscan: {
    apiKey: etherscanApiKey,
  },
  solidity: '0.8.4',
};
