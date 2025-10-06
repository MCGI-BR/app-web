import React from 'react';
import styles from './info-section.module.css'

const InfoSection = () => {
    return (
        <>
            <section
                id='info'
                className={styles.infoContainer}>
                <div className={styles.aboutChurch}>
                    <div className={titleArea}>
                        <div className={ctaArea}>

                        </div>
                    </div>
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