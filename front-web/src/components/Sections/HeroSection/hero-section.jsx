import React from 'react';
import styles from './hero-section.module.css'
import HeroBg from '../../../utils/assets/Preachers.png'
import Button from '../../Button/button.jsx';

const HeroSection = () => {
    return (
        <>
            <section
                id='hero'
                className={styles.heroContainer}
                style={{ '--hero-bg-url': `url(${HeroBg})` }}>

                <div className={styles.mainContent}>
                    <div className={styles.titleArea}>
                        <h1 className={styles.title}>
                            Membros da Igreja de Deus Internacional
                        </h1>
                        <h2>
                            O Legado Continua
                        </h2>
                    </div>
                    <div className={styles.ctaArea}>
                        <Button
                            bgColor="#FDAD00"
                            textColor="var(--cor-branco)"
                            fontSize={"40px"}
                            padding={"0.5rem 10rem"}

                            href="#saiba-mais">
                            SAIBA MAIS
                        </Button>

                        <Button
                            bgColor="transparent"
                            textColor="var(--cor-branco)"
                            fontSize={"24px"}
                            padding={"0.5rem 5rem"}
                            borderColor="var(--cor-branco)"
                            href={"#contato"}>
                            ENTRE EM CONTATO
                        </Button>
                    </div>
                </div>

            </section>
        </>
    )
}

export default HeroSection;