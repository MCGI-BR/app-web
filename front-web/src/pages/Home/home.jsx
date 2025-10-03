import { useState, useEffect } from 'react';
import styles from './home.module.css'
import HeroSection from '../../components/Sections/HeroSection/hero-section.jsx'
import Navbar from '../../components/Navbar/navbar.jsx'

const Home = () => {
    return (
        <>
            <Navbar />
            <main>
                <HeroSection />
            </main>
        </>
    )
}

export default Home;