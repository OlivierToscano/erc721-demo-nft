# ERC721 deployed with Truffle

## Requierements

Ganache should be installed with Truffle suite: [https://trufflesuite.com/ganache/](https://trufflesuite.com/ganache/)

Node v18 or above should be installed

[Install node](https://nodejs.org/en/download/)

Install NPM dependencies

```shell
npm install
```

## Commands

Unit test

```shell
truffle test
```

Compile smart contract

```shell
truffle compile
```

Deploy on Ganache

```shell
truffle migrate --network ganache
```

## Mint NFT token on goerli network

In this case the *Smart contract* has already been deployed on *Goerli network*. We will open a *Truffle console* and connect to the smart contract with the *owner account* to be able to *Mint a NFT*

Smart contract address
> Token address: 0x1Ae58d5dfC9cb85e51EDE52231a0cbb6a55e65A4

Replace `CONTRACT_ABI` with the minimized version of the contract ABI (explaination bellow)

```shell
truffle console --network goerli

truffle(goerli)> let accounts = await web3.eth.getAccounts();
truffle(goerli)> let instance = await new web3.eth.Contract(CONTRACT_ABI, '0x1Ae58d5dfC9cb85e51EDE52231a0cbb6a55e65A4');
truffle(goerli)> await instance.methods.safeMint(accounts[0], "flower1.json").send({from: accounts[0]});
```

Check your NFT on [Opensea testnet](https:://testnets.opensea.io)

Replace address *0x...* with the *token address*
Replace *0* with the *token ID* (uint256)

> https:://testnets.opensea.io/assets/goerli/0X.../0

Example
[https:://testnets.opensea.io/assets/goerli/0x1Ae58d5dfC9cb85e51EDE52231a0cbb6a55e65A4/0](https:://testnets.opensea.io/assets/goerli/0x1Ae58d5dfC9cb85e51EDE52231a0cbb6a55e65A4/0)

## How to get contract ABI

> truffle compile

Minimize script will take the builded version of the *Flowers* contract, extract *ABI* then save and log the minimized version of it.

> node minimize.js

## Webp converter

Installation and usage of WebP converter on *MacOs*

```shell
brew install cwebp
cwebp -q 80 flower1.jpg -o flower1-1080.webp -resize 1080 720
```

[source: web.dev](https://web.dev/codelab-serve-images-webp/)

## Troubles

### My image doesn't show up on Opensea testnet

NFT images should respect the defined standard described here https://eips.ethereum.org/EIPS/eip-721

> A URI pointing to a resource with mime type image/* representing the asset to which this NFT represents.
> Consider making any images at a width between 320 and 1080 pixels and aspect ratio between 1.91:1 and 4:5 inclusive.

If you host your NFT images, the server should return a *content-type* / *mime/types* with the following represesntation *image/**

you can check the returned headers with CURL and the --head flag

```shell
curl --head https://static.webcms.lu/olivier/nftFlowers/flower1.webp                                          

HTTP/2 200 
date: Tue, 17 Jan 2023 15:51:06 GMT
server: Apache
last-modified: Tue, 17 Jan 2023 15:26:49 GMT
etag: "ab42-5f277541b0839"
accept-ranges: bytes
content-length: 43842
access-control-allow-origin: *
content-type: image/webp
```
