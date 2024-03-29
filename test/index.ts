import { ethers } from "hardhat";

describe("market ", function () {
  it("Should mint and trade NFTs", async function () {
    const Market = await ethers.getContractFactory("Market");
    let market = await Market.deploy();
    market = await market.deployed();
    const marketAdress = market.address;


    const Nft = await ethers.getContractFactory("NFT");
    const nft = await Nft.deploy(marketAdress);
    await nft.deployed();
    const nftContractAdress = nft.address;

    let listingPrice = await market.getListingPrice();
  
    listingPrice = listingPrice.toString();

    const auctionPrice = await ethers.utils.parseUnits("100", "ether");


    await nft.mintToken("https-t1");
    await nft.mintToken("https-t2");
    await nft.mintToken("https-t3");

   await market.makeMarketItem(nftContractAdress, 1, auctionPrice, {value: listingPrice}); 
   await market.makeMarketItem(nftContractAdress, 2, auctionPrice, {value: listingPrice}); 


    const [_, buyerAddress] = await ethers.getSigners();
    market.connect(buyerAddress).createMarketSale(nftContractAdress, 1, {value: auctionPrice});

    let items: any[] = await market.fetchMarketTokens();

    items = await Promise.all(items.map(async i=> {

      const tokenURI = await nft.tokenURI(i.tokenId)

      return {
        price: i.price.toString(),
        tokenId: i.tokenId.toString(),
        seller: i.seller,
        owner: i.owner,
        tokenURI,
      }
    }))

    console.log("items ", items);
  
  });
});
 