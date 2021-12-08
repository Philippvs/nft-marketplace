require('dotenv').config(); 

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337
    },
    ropsten: {
      url: process.env.ROPSTEN_URL || "",
      accounts: [process.env.PRIVATE_KEY || ""]
    },
    mainnet: {
      url: "",
      accounts: []
    }
  }
};

export default config;
