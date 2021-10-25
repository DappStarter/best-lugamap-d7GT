require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog tackle food shrug recipe mad promote ice light army gauge'; 
let testAccounts = [
"0xb2be35b26eb17fd26315df26296164e3d8b9943ff49956e8b0acecc3110ea1ef",
"0x48e415858b4b95c6cfe52189add196cc1f6dc990f6830523ee24cc3a392ae07e",
"0xe39f3d833a1d8d33a35ca2c939426a33709cd0660d9f4da9acf4a0b1e84f1769",
"0xa1a1679a46617ea3bcdadbe1daf30300b25fd8ff7d15aa466cddd000ae2edf0a",
"0xe0afaaff64613981c774c33ba547063a61292f1c56f61650bfb0ac55bce965e1",
"0xed2df14ff2138d1760f418c3b5f543782c02bc805ddfb67c9b48d674130f7e7e",
"0x9e84cf41962f88ae051d6ce6714487ed78e3fb3abd0f27d0340b7d607ed8d7d0",
"0xc76adf3faf85c998e6ad7022b0df993f37a60c333cc7cc6637530665edc200f6",
"0x3ba5486e446ea236c66c7835c962a1ca1a427757325eddf5d202de3aa816e2a9",
"0x92d37ce3be28cd48463e55c8c29bb466292870d8be03dc826b6b5a832397e5c5"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


