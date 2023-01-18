# ERC721 deployed with Hardhat

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploy that contract.

## Requierements

Latest node LTS version
Hardhat works with the latest node LTS version as described in the link bellow
[https://hardhat.org/hardhat-runner/docs/reference/stability-guarantees#node.js-versions-support](https://hardhat.org/hardhat-runner/docs/reference/stability-guarantees#node.js-versions-support)

Node release schedule
[https://github.com/nodejs/release#release-schedule](https://github.com/nodejs/release#release-schedule)

Node v18 or above should be installed

[Install node](https://nodejs.org/en/download/)

Install NPM dependencies

```shell
npm install
```

## Hardhat commands

Try running some of the following tasks:

Hardhat help

```shell
npx hardhat help
```

Unit test

```shell
npx hardhat test
```

Display GAS information

```shell
REPORT_GAS=true npx hardhat test
```

Hardhat comes with a dedicated node (something like ganache), to start a local node, hit the following

```shell
npx hardhat node
```

### Deploy Smart contract

Hardhat commands to clean, compile and deploy Smart contract

```shell
npx hardhat clean
npx hardhat compile
npx hardhat run scripts/deploy.js
```

The deployment script should return something like that

```shell
Start deployment script
Deploy contract at 0x5FbDB2315678afecb367f032d93F642f64180aa3
```
