import { expect } from "chai";
import { ethers } from "hardhat";

describe("market ", function () {
  it("Should mint and trade NFTs", async function () {
    const Market = await ethers.getContractFactory("Market");
    const market = Market.deploy();
    await market.deployed();
    const marketAdress = market.address;


    const Nft = await ethers.getContractFactory("NFT");
    const nft = Nft.deploy();
    await nft.deployed();
    const nftContractAdress = nft.address;

    let listtingPrice = market.getListigPrice;
    listtingPrice = listtingPrice.toString();

    const auctionPrice = ethers.utils.parseUtils("100", "ether");


    await nft.mintToken("https-t1");
    await nft.mintToken("https-t2");
    await nft.mintToken("https-t3");


    await market.makeMatketIten(nftContractAdress, 1, auctionPrice, {value: listtingPrice}); 
    await market.makeMatketIten(nftContractAdress, 2, auctionPrice, {value: listtingPrice}); 


    const [_, buyerAddress] = ethers.getSigners();
    market.connect(buyerAddress).createMarketSale(nftContractAdress, 1, {value: auctionPrice});

    const items = await market.fetchMarketTokens();

    console.log("items ", items);
  
  });
});
 