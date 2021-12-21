import {NextPage} from "next";
import React from "react";
import {Box} from "@mui/material";


const ContentContainer: NextPage = () => {

    const ContentContainerStyle: React.CSSProperties = {
        width: "92vw",
        height: "85vh",
        position: "relative",
        margin: "auto",
        background: "black",
        opacity: 0.2,
        marginTop: 10,
        borderRadius: 20,
    }


    return <Box style={ContentContainerStyle}/>
}

export default ContentContainer