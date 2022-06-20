//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract NomadsERC721 is ERC721URIStorage {

    uint256 NOMADS_TOKEN_ID;

    constructor() ERC721("ConnectNFT", "CN") {}

    function mintNFT(address _userOne, address _userTwo, string memory tokenURI) public {
        _mint(_userOne, NOMADS_TOKEN_ID);
        _setTokenURI(NOMADS_TOKEN_ID, tokenURI);
        NOMADS_TOKEN_ID++;

        _mint(_userTwo,NOMADS_TOKEN_ID);
        _setTokenURI(NOMADS_TOKEN_ID, tokenURI);
        NOMADS_TOKEN_ID++;
    }
}