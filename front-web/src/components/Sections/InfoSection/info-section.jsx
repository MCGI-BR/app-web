import React from 'react';
import styles from './info-section.module.css'
import mcgiLogo from '../../../utils/assets/MCGI_logo_star 2.png'
import Button from '../../Button/button';

const InfoSection = () => {
    return (
        <>
            <section
                id='info'
                className={styles.infoContainer}>
                <div className={styles.aboutChurch}>
                    <div className={styles.infoArea}>
                        <div className={styles.logo}>
                            <img src={mcgiLogo} alt="logo dos MIDI" />
                        </div>
                        <div className={styles.titleArea}>
                            <h1>Sobre os Membros da Igreja de Deus Internacional</h1>
                            <span className={styles.line}></span>
                        </div>
                        <div className={styles.descArea}>
                            <p>
                                Conheça o grupo de pessoas ensinadas a fazer o bem a todos. Os Membros da Igreja de Deus Internacional
                            </p>

                            <Button
                                bgColor="var(--cor-amarelo)"
                                textColor="var(--cor-branco)"
                                fontSize={"24px"}
                                padding={"0.5rem 3rem"}
                                href={"#contato"}>
                                SAIBA MAIS
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={styles.cardContainer}>

                </div>
                <div className={styles.cardSlider}>
                    <div className={styles.cardsArea}>

                    </div>
                </div>
            </section>
        </>
    )
}

export default InfoSection;