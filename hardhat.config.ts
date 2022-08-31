import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
// import { config as dotenvConfig } from "dotenv";

module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    // ropsten: {
    //   url: "https://ropsten.infura.io/v3/12211ee619cf492385bfd6743dbff743",
    //   accounts: [`0x${REACT_APP_ROPSTEN_METAMASK_KEY}`]
    // }
  }
};
