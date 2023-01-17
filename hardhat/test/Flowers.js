const {expect} = require("chai");
const hre = require("hardhat");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");

describe("Flowers", function() {
    async function deployFlowersAndMintTokenFixture() {
        const Flowers = await hre.ethers.getContractFactory("Flowers");
        const flowersInstance = await Flowers.deploy();
        const [owner, otherAccount] = await ethers.getSigners();
        await flowersInstance.safeMint(otherAccount.address);
        return {flowersInstance};
    }

    it("is possible to mint a token", async() => {
        const {flowersInstance} = await loadFixture(deployFlowersAndMintTokenFixture);
        const [owner, otherAccount] = await ethers.getSigners();
        expect(await flowersInstance.ownerOf(0)).to.equal(otherAccount.address);
    })

    it("fails to transfer tokens from the wrong address", async () => {
        const {flowersInstance} = await loadFixture(deployFlowersAndMintTokenFixture);
        const [owner, otherAccount, notNFTOwner] = await ethers.getSigners();
        expect(await flowersInstance.ownerOf(0)).to.equal(otherAccount.address);
        await expect(flowersInstance.connect(notNFTOwner).transferFrom(otherAccount.address, notNFTOwner.address, 0)).to.be.revertedWith("ERC721: caller is not token owner or approved");
    })
})