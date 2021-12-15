import Button from '@material-ui/core/Button'
import { Route } from 'next/dist/server/router'
import React from 'react'

export const HeaderButton: React.FC<Route> = ({name, href}) =>  {
    return <Button key={name} href={href}/>
    
}
