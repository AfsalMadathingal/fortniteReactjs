import React from 'react'
import Header from '../components/Header'
import GameHighlights from '../components/GameHighlights'
import ContributionSection from '../components/ContributionSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='w-full h-full bg-black'>
        <Header/>
        <GameHighlights/>
        <ContributionSection/>
        <ContactSection/>
        <Footer/>
    </div>
  )
}

export default Home
