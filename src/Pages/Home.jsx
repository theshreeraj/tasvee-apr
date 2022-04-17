import React from 'react'
import AppMockup from '../Components/AppMockup'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import ServiceCard from '../Components/ServiceCard'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <ServiceCard />
            <AppMockup />
            <Footer />
        </div>

    )
}

export default Home