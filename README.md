# ERC721 token

## Development frameworks

- truffle / ganache / web3
- hardhat / ethers
- foundary

## Requierements

node v18 and above

## Truffle

```shell
truffle test
truffle migrate --network ganache
```

## Mint NFT token on goerli network

> token address: 0x1Ae58d5dfC9cb85e51EDE52231a0cbb6a55e65A4
> Metamask account1 address: 0xad45544F725f94bC81A5FAe2eC03FB22c84Ebdf3

Replace `CONTRACT_ABI` with the minimized version of the contract ABI (explaination bellow)

```shell
truffle console --network goerli

truffle(goerli)> let accounts = await web3.eth.getAccounts();
truffle(goerli)> let instance = await new web3.eth.Contract(CONTRACT_ABI, '0x1Ae58d5dfC9cb85e51EDE52231a0cbb6a55e65A4');
truffle(goerli)> await instance.methods.safeMint(accounts[0], "flower1.json").send({from: accounts[0]});
```

Check your NFT on Opensea testnet

replace address 0x... with the token address
replace 0 with the token ID (uint256)

> https:://testnets.opensea.io/assets/goerli/0X.../0

example

> https:://testnets.opensea.io/assets/goerli/0x1Ae58d5dfC9cb85e51EDE52231a0cbb6a55e65A4/0

## How to get contract ABI

> truffle compile

Minimize script will take the builded version of the *Flowers* contract, extract *ABI* then save and log the minimized version of it.

> node minimize.js

## Webp converter

https://web.dev/codelab-serve-images-webp/

```shell
brew install cwebp

  -resize <w> <h> ........ resize picture (*after* any cropping)
cwebp -q 80 flower1.jpg -o flower1-1080.webp -resize 1080 720
```

## Troubles

### If your image doesn't show up on Opensea testnet

NFT images should respect the defined standard described here https://eips.ethereum.org/EIPS/eip-721

```
"description": "A URI pointing to a resource with mime type image/* representing the asset to which this NFT represents.
Consider making any images at a width between 320 and 1080 pixels and aspect ratio between 1.91:1 and 4:5 inclusive."
```

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
