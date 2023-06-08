require('@nomiclabs/hardhat-waffle');
const fs = require('fs');

const privateKey = fs.readFileSync('.secret').toString().trim();
const etherscanApiKey = process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY_SECRET;

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/SOnz4mHo8bw9--dCetdB80SozSajYT8N',
      accounts: [privateKey],
    },
  },
  etherscan: {
    apiKey: etherscanApiKey,
  },
  solidity: '0.8.4',
};
