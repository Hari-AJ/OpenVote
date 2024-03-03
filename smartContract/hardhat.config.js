require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    cosvm: {
      chainId: 323,
      url: 'https://rpc.cosvm.net',
      accounts: ['4b71fa940ff8546d18960ed12d22a61dc9eed8a2d12cab1405b9499f8e71d528'],
    },
  },
};