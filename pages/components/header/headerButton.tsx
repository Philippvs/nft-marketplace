import Button from '@material-ui/core/Button'

import React from 'react'
import {NextPage} from "next";
import HeaderItem from "../../../interfaces/headerItem";


const HeaderButton: NextPage<HeaderItem> = (props) => {
    return <Button style={{marginLeft: 4}} href={props.href} variant="outlined">{props.name}</Button>
}

export default HeaderButton
