import React from "react";

import HeaderLink from "./headerLink";
import HeaderItem from "../../../interfaces/headerItem";
import {NextPage} from "next";
import {Box} from "@material-ui/core";
import HeaderAvatar from "./headerAvatar";
import HeaderWallet from "./headerWallet";

const Header: NextPage = () => {

    const routes: HeaderItem[] = [
        {
            name: "Main Marketplace",
            href: "main-marketplace",
        },
        {
            name: "Mint Tokens",
            href: "mint-tokens",
        },
        {
            name: "My NFTs",
            href: "my-nfts",
        },
        {
            name: "Account Dashboard",
            href: "account-dashboard",
        }
    ]

    const HeaderStyle: React.CSSProperties = {
        display: 'inline-flex',
        flexDirection: 'row-reverse',
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        marginLeft: 200
    }

    const MainHeaderStyle: React.CSSProperties = {
        marginTop: 20
    }

    const InnerWrapperStyle: React.CSSProperties = {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",

    }


    return (
        <header style={MainHeaderStyle}>
            <Box style={InnerWrapperStyle}>
                <HeaderAvatar/>
                <HeaderWallet/>
                <Box style={HeaderStyle}>
                    {routes.map(route =>
                        <HeaderLink key={route.name} name={route.name} href={route.href}/>
                    )
                    }
                </Box>


            </Box>
        </header>
    )
}

export default Header;


