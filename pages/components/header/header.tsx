import React from "react";

import HeaderButton from "./headerButton";
import HeaderItem from "../../../interfaces/headerItem";
import {NextPage} from "next";
import {Box} from "@material-ui/core";

const Header: NextPage = () => {

    const routes: HeaderItem[] = [
        {
            name: "Mint NFT",
            href: "mint-nft",
        },
        {
            name: "MY NFT's",
            href: "my-nfts",
        }
    ]

    const HeaderStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row-reverse',
        padding: 5,
        marginRight: "5%",
        marginLeft: "5%",
        marginTop: 5
    }


    return (
        <header>
            <Box style={HeaderStyle}>
                {routes.map(route =>
                    <HeaderButton key={route.name} name={route.name} href={route.href}/>
                    )
                }
            </Box>
        </header>
    )
}

export default Header;


