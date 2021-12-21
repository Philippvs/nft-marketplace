import {ethers} from "hardhat";
import * as fs from "fs";

async function main() {
    // Hardhat always runs the compile task when running scripts with its command
    // line interface.
    //
    // If this script is run directly using `node` you may want to call compile
    // manually to make sure everything is compiled
    // await hre.run('compile');

    // We get the contract to deploy
    const NFTMarket = await ethers.getContractFactory("Market");
    const nftMarket = await NFTMarket.deploy();
    await nftMarket.deployed();
    

    // We get the contract to deploy
    const NFT = await ethers.getContractFactory("NFT");
    const nft = await NFT.deploy(nftMarket.address);
    await nft.deployed();

    const config = `
    export const nftmarketaddress = ${nftMarket.address}
    export const nftaddress = ${nft.address}
    `

    const data = JSON.stringify(config);
    fs.writeFileSync("config.js", JSON.parse(data))

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
