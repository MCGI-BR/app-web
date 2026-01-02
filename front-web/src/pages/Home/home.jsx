import styles from './home.module.css'
import Navbar from '../../components/Navbar/navbar.jsx'
import HeroSection from '../../components/Sections/HeroSection/hero-section.jsx'
import InfoSection from '../../components/Sections/InfoSection/info-section.jsx'
import SliderSection from '../../components/Sections/SliderSection/slider-section.jsx'

const Home = () => {
    return (
        <>
            <Navbar />
            <main>
                <HeroSection />
                <InfoSection />
                <SliderSection />
            </main>
        </>
    )
}

export default Home;