//SPDX-License-Identifier: MIT
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

    function makeMarketItem(
        address nftContract,
        uint256 tokenId,
        uint256 price
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

        IERC721(nftContract).transferFrom(msg.sender, address(this), tokenId);

        emit MarketTokenMinted(
            itemId,
            nftContract,
            tokenId,
            msg.sender,
            address(0),
            price,
            false
        );
    }

    function createMarketSale(address nftContract, uint256 itemId)
        public
        payable
        nonReentrant
    {
        uint256 price = idToMarketToken[itemId].price;
        uint256 tokenId = idToMarketToken[itemId].tokenId;

        require(
            price == msg.value,
            "Please submit the asking price in order to continue"
        );

        idToMarketToken[itemId].seller.transfer(msg.value);

        IERC721(nftContract).transferFrom(address(this), msg.sender, tokenId);

        idToMarketToken[itemId].owner = payable(msg.sender);
        idToMarketToken[itemId].sold = true;

        _tokensSold.increment();
        payable(owner).transfer(listingPrice);
    }

    function fetchMarketTokens() public view returns (MarketToken[] memory) {
        uint256 itemCount = _tokenIds.current();
        uint256 unsoldItemCount = itemCount - _tokensSold.current();
        uint256 currentIndex = 0;

        MarketToken[] memory items = new MarketToken[](unsoldItemCount);

        for (uint256 i = 0; i < itemCount; i++) {
            if (idToMarketToken[i + 1].owner == address(0)) {
                MarketToken storage currentItem = idToMarketToken[i + 1];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    function fetchPersonalToken() public view returns (MarketToken[] memory) {
        uint256 itemCount = _tokenIds.current();

        MarketToken[] memory items;

        for (uint256 i = 0; i < itemCount; i++) {
            if (idToMarketToken[i + 1].owner == msg.sender) {
                items[i] = idToMarketToken[i + 1];
            }
        }
        return items;
    }

    function fetchMintedNfts() public view returns (MarketToken[] memory) {
        uint256 itemCount = _tokenIds.current();

        MarketToken[] memory items;
        for (uint256 i = 0; i < itemCount; i++) {
            if (idToMarketToken[i + 1].seller == msg.sender) {
                items[i] = idToMarketToken[i];
            }
        }
        return items;
    }
}
