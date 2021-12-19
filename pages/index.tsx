import type { NextPage } from 'next'
import React from 'react'
import Header from './components/header/header'
import MainBackground from "./components/background/mainBackground";

const Home: NextPage = () => {
  return <>
    <MainBackground/>
  <Header/>
  </>
}

export default Home
