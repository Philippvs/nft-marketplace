import React from "react";
import {NextPage} from "next";
import {CardMedia} from "@material-ui/core";

const MainBackground: NextPage = () => {


    const backgoundStyle: React.CSSProperties = {
        width: "100vw",
        height: "100vh",
        objectFit: "cover",
        position: "fixed",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: -2,
    }

    const overlayStyle: React.CSSProperties = {

        height: "100%",
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
        background: "black",
        opacity: 0.35,
    }

    return <>

        <div style={overlayStyle}>
            <CardMedia style={backgoundStyle} component="video" autoPlay loop muted src="./background.mp4"/>
        </div>
    </>
}

export default MainBackground;


