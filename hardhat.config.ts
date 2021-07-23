import { HardhatUserConfig } from 'hardhat/types';

import '@nomiclabs/hardhat-waffle';
import 'hardhat-typechain';

const config: HardhatUserConfig = {
  solidity: {
    compilers: [{
      version: "^0.8.0",
      settings: {}
    }]
  }
};

export default config;