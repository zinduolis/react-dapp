import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    }
    ropsten: {
      url: "https://ropsten.infura.io/v3/12211ee619cf492385bfd6743dbff743",
      accounts: 
    }
  }
};
