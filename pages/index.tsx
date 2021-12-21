import type {NextPage} from 'next'
import React from 'react'
import Header from './components/header/header'
import MainBackground from "./components/background/mainBackground";
import ContentContainer from "./components/layout/contentContainer";


const Home: NextPage = () => {
    return (
        <>
            <MainBackground/>
            <Header/>
            <ContentContainer/>
        </>
    )
}

export default Home
