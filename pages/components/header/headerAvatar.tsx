import {Avatar, Box} from "@mui/material";
import React from "react";
import {NextPage} from "next";


const HeaderAvatar: NextPage = () => {

    const AvatarWrapperStyle: React.CSSProperties = {
        display: "inline-flex",
        alignItems: "center",
    }

    const AvatarStyle: React.CSSProperties = {
        height: 80,
        width: 80,
    }


    return <Box style={AvatarWrapperStyle}>
        <Avatar style={AvatarStyle} src={"/pagelogo.svg"}> </Avatar>
    </Box>
}

export default HeaderAvatar;

