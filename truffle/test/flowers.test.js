const Flowers = artifacts.require("Flowers");
const truffleAssert = require("truffle-assertions");

contract("Flowers",(accounts) => {
    it('Should credit an NFT to a specific account', async () => {
        const flowersInstance = await Flowers.deployed();
        await flowersInstance.safeMint(accounts[1], "flower1.json");
        assert.equal(await flowersInstance.ownerOf(0), accounts[1], "Owner of token 1 is not equal to account 2");
    })
})