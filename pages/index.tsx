import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import AboutUs from './AboutUs'
import Chef from './Chef'
import Laurels from './Laurels'
import Intro from './Intro'
import Gallery from './Gallery'
import FindUs from './FindUs'
import Footer from '../components/Footer'

type Props = {}

export default function Home({}: Props) {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <Chef />
      <Intro />
      <Laurels  />
      <Gallery  />
      <FindUs />
      <Footer />
    </div>
  )
}