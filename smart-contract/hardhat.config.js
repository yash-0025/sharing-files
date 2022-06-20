/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const { ALCHEMY_API_KEY_URL, MUMBAI_PRIVATE_KEY } = process.env;
module.exports = {
   solidity: "0.8.1",
   networks: {
      hardhat: {},
      mumbai: {
         url: ALCHEMY_API_KEY_URL,
         accounts: [MUMBAI_PRIVATE_KEY]
      }
   },
}