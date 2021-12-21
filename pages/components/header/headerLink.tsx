import React from 'react'
import {NextPage} from "next";
import HeaderItem from "../../../interfaces/headerItem";
import {Link} from "@mui/material";


const HeaderLink: NextPage<HeaderItem> = (props) => {

    const LinkStyle: React.CSSProperties = {
        fontSize: 15,
        color: "black",
    }


    return <div className="header-link-wrapper">
        <Link underline={"none"} style={LinkStyle} href={props.href}>{props.name}</Link>
    </div>

}

export default HeaderLink
