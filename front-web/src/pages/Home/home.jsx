import styles from './home.module.css'
import HeroSection from '../../components/Sections/HeroSection/hero-section.jsx'
import Navbar from '../../components/Navbar/navbar.jsx'
import InfoSection from '../../components/Sections/InfoSection/info-section.jsx'

const Home = () => {
    return (
        <>
            <Navbar />
            <main>
                <HeroSection />
                <InfoSection />
            </main>
        </>
    )
}

export default Home;