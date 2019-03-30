/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/f590b0b9374e44389e4a12797c06d44f")
      },
      network_id: 4
    },
  	development: {
  		host: "127.0.0.1",
  		port: '7545',
  		network_id: "*"
  	},
    kovan: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://kovan.infura.io/v3/f590b0b9374e44389e4a12797c06d44f")
      },
      network_id: 42
    }
  },
  compilers: {
    solc: {
      version: "^0.4.19"  // ex:  "0.4.20". (Default: Truffle's installed solc)
    }
 }
};
