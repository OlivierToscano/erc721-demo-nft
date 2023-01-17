require("@nomicfoundation/hardhat-toolbox");

const fs = require("fs");
let mnemonic = fs.readFileSync(".secret").toString().trim();
let infuraProjectId = fs.readFileSync(".infura").toString().trim();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    networks: {
        goerli: {
            url: "https://goerli.infura.io/v3/" + infuraProjectId,
            acounts: {
                mnemonic,
                path: "m/44'/60'/0'/0",
                initialIndex: 0,
                count: 10
            }
        },
    },
    etherscan: {
        apikey: fs.readFileSync(".etherscan").toString().trim()
    },
    solidity: "0.8.17",
};
