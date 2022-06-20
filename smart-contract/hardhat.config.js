/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const { ALCHEMY_API_URL, RINKEBY_PRIVATE_KEY } = process.env;
module.exports = {
   solidity: "0.8.1",
   defaultNetwork: "rinkeby",
   networks: {
      hardhat: {},
      rinkeby: {
         url: ALCHEMY_API_URL,
         accounts: [RINKEBY_PRIVATE_KEY]
      }
   },
}