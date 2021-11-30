// SPDX-Licence-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Market is ReentrancyGuard {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    Counters.Counter private _tokensSold;

    address payable owner;
    uint256 listingPrice = 0.45 ether;

    constructor() {
        owner = payable(msg.sender);
    }

    struct MarketToken {
        uint256 itemId;
        address nftContract;
        uint256 tokenId;
        uint256 price;
        address payable seller;
        address payable owner;
        bool sold;
    }

    mapping(uint256 => MarketToken) private idToMarketToken;

    // Listen to events from front end application

    event MarketTokenMinted(
        uint256 indexed itemId,
        address indexed nftContract,
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );

    function getListingPrice() public view returns (uint256) {
        return listingPrice;
    }

    function mintMarketItem(
        uint256 price,
        address nftContract,
        uint256 tokenId
    ) public payable nonReentrant {
        require(price > 0, "Price must be greater than 0");
        require(
            msg.value == listingPrice,
            "Price must be equal to listing price"
        );

        _tokenIds.increment();
        uint256 itemId = _tokenIds.current();

        idToMarketToken[tokenId] = MarketToken(
            itemId,
            nftContract,
            tokenId,
            price,
            payable(msg.sender),
            payable(address(0)),
            false
        );
    }
}
