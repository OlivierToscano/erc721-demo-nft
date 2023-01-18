console.log('Start deployment script');
(async () => {
    try {
        const Flowers = await hre.ethers.getContractFactory("Flowers");
        const flowersInstance = await Flowers.deploy();
        await flowersInstance.deployed();
        console.log(`Deploy contract at ${flowersInstance.address}`);
    } catch (e) {
        console.error(e);
        process.exitCode = 1;
    }
})()