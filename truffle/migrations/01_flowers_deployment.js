const Flowers = artifacts.require("Flowers");

module.exports = function(deployer, network, accounts) {
    // console.log(network, accounts);
    deployer.deploy(Flowers, {from: accounts[0]});
}