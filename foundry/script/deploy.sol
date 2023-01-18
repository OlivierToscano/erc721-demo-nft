pragma solidity ^0.8.4;

import "forge-std/Script.sol";
import "../src/Flowers.sol";

contract FlowersScript is Script {
    function setUp() public {}

    function run() public {
        string memory seedPhrase = vm.readFile(".secret");
        uint256 privateKey = vm.deriveKey(seedPhrase, 0);
        vm.startBroadcst(privateKey);
        Flowers flowers = new Flowers();

        vm.stopBroadcast();
    }
}