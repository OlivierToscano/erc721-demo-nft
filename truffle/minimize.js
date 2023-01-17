const path = require('path');
const fs = require('fs');

const contract = require('./build/contracts/Flowers.json');
const abi = contract.abi;
const minifiedABI = JSON.stringify(abi).replace(/(\r\n|\n|\r)/gm, "");

fs.writeFileSync(`./contracts/abi.txt`, minifiedABI);
console.log(minifiedABI);