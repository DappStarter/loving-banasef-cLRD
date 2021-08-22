require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index raise mad slow inflict clinic metal general'; 
let testAccounts = [
"0xbe3ae455f6ce073594ba4df35a52601ce3f3bf6c0f03b0a28ea64debdf3261b8",
"0x3a5210f308cc4f1147bd4d2f4eb6833af57ed4977c8ba8db10f7b9f284c186b6",
"0x3f4503b7b6be00a94ae56f2e3120abe984127a0496c43f8d8b34bdf4b1bc6831",
"0xf3e8bb12fd256cac77df9131a1ffbf31f3d02a1afb991437629002414ef8c018",
"0x85af502ef50a463c53ea3d8def555475df0fafc989d5efbfb45d5c58a9bbab95",
"0x3d94052c225a1d258b35aeadad05174847432d26f70574878828864639a59097",
"0xa6d2a4f14fee2b2382178084b875e293e0e88db312e3f23a19fd958e13c77daa",
"0x1da3222faa4eb03852299324a92ac9c2221885f07415b88a8abecf98a3867d21",
"0x64d46d2d74dd4d9a26a6247f205c30c29ea65d8ff45dd502803048669661398e",
"0x402742ecfd0b65b5af3852b657ccf16191bd5f13ba32ec4b0575b2eccfb2906d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

