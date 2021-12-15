import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import { Routes } from "../../interfaces";
import { HeaderButton } from "./headerButton";




export default function Header() {

    const routes: Routes[] = [
        {
            name: "Mint NFT",
            href: "mint-nft",
        },
        {
            name: "MY NFT's",
            href: "my-nfts",
        }

    ]

    

    return (
        <header>
             <AppBar>
                {routes.map(route => <HeaderButton name={route.name} href={route.href}/>)}

             </AppBar>
        </header>
    )
}


