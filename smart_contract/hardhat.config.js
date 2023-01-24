require("@nomiclabs/hardhat-waffle");
/*Deployment Address 
0x60acd80C88E021409fEb53A46c17c83351f94892*/
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/n1K-FXXQ3bUdBa6ylC_UfLuitXEeMV4M',
      accounts: [
        '726511961b37bb37b8bacdd1987961f5c20f4308b82efe6362baee77f3438e2c',
      ],

    }
  }
};






