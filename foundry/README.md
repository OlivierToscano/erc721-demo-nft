# ERC721 deployed with Foundry

This project demonstrates a basic Foundry use case. It comes with a sample contract, a test for that contract, and a script that deploy that contract.

## Install Foundry

```shell
curl -L https://foundry.paradigm.xyz | bash
source ~/.bashrc 
foundryup
```

### Foundry Tools

- forge: the build, test, debug, deploy smart contracts
- anvil: the foundry equivalent of Ganache
- cast: low level access to smart contracts (a bit of a truffle console equivalent)

### Initialize project

Initialize project

```shell
forge init .
```

### Building and Testing

To build the smart contracts, simply run

```shell
forge build
```

### Adding our NFT

Remove sample files

```shell
rm src/*.sol test/*.sol script/*.sol
```

Install openzeppelin with

```shell
forge install openzeppelin/openzeppelin-contracts
```

In case of errors, please commit something

```shell
git add .
git commit -a -m "Added flowers contract and removed everything else"
```

## Running a Foundry Script

Make sure the environment variables are set in our environment.

```shell
source .env
```

Deploy

```shell
forge script script/Deploy.sol:FlowersScript --broadcast --verify --rpc-url ${GOERLI_RPC_URL}
```

## Verifying the Contract

With Foundry the Contract verification works automatically.
[Etherscan on Goerli Network](https://goerli.etherscan.io)
