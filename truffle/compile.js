const path = require('path');
const fs = require('fs');
const solc = require('solc');

const contractPath = path.resolve(__dirname, 'contracts', 'flowers.sol');
const source = fs.readFileSync(contractPath, 'utf8');

const input = {
  language: 'Solidity',
  sources: {
    'flowers.sol': {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*'],
      },
    },
  },
};

// compile
const output = JSON.parse(solc.compile(JSON.stringify(input)));
console.log(output);
/*
// write contract into client contracts folder
for (var contractName in output.contracts['flowers.sol']) {
  fs.writeFileSync(`./contracts/${contractName}.json`, JSON.stringify(output.contracts['flowers.sol'][contractName]));
}

// export
module.exports = output.contracts['flowers.sol'].Flowers;
 */