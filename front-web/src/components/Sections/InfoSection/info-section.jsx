import React from 'react';
import styles from './info-section.module.css'
import mcgiLogo from '../../../utils/assets/MCGI_logo_star 2.png'
import Button from '../../Button/button';
import Card from '../../Card/card';
import bes from '../../../utils/assets/bes.jpg';
import kdr from '../../../utils/assets/kdr.jpg';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/modules';

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
                    <div className={styles.cardsArea}>
                        <Card
                        cardImage={bes}
                        cardAlt="Imagem do irmao eli"
                        title="ELI SORIANO"
                        ></Card>

                        <Card
                        cardImage={kdr}
                        cardAlt="Imagem do irmao daniel"
                        title="DANIEL RAZON"
                        ></Card>
                    </div>
                    <div className={styles.slider}>

                    </div>
                </div>

            </section>
        </>
    )
}

export default InfoSection;