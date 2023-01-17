// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

/// @custom:security-contact olivier@toscano.lu
contract Flowers is ERC721, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("flowers", "FLO") {}

    function _baseURI() internal pure override returns (string memory) {
        return "https://static.webcms.lu/olivier/nftFlowers/";
    }

    function safeMint(address to) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
    }

    function byToken() public payable {
        uint256 tokenId = _tokenIdCounter.current();
        require(msg.value == tokenId * 0.1 ether, "Not enough funds sent");

        _tokenIdCounter.increment();
        _safeMint(msg.sender, tokenId);
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        pure
        override(ERC721)
        returns (string memory)
    {
        return string(abi.encodePacked(_baseURI(), "flower", tokenId+1, ".json"));
    }
}