import {NextPage} from "next";
import {Box, Button} from "@mui/material";
import React from "react";

const HeaderWallet: NextPage = () => {
    const WalletWrapperStyle: React.CSSProperties = {
        display: "inline-flex",
        alignItems: "center",
    }

    const WalletButtonStyle: React.CSSProperties = {
        borderRadius: 20,
        color: "#a3371d",
        borderColor: "#a3371d"

    }


    return <Box style={WalletWrapperStyle}>
        <Button style={WalletButtonStyle} variant={"outlined"}> Connect Wallet</Button>
    </Box>


}

export default HeaderWallet