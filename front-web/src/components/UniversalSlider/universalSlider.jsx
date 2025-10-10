import React from 'react';
import Slider from 'react-slick';
import styles from './universal-slider.module.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const UniversalSlider = ({ data, settings }) => {

    const defaultSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 2,
    };

    const sliderSettings = { ...defaultSettings, ...settings };

    return (
        <div className={styles.sliderWrapper}>
            <Slider {...sliderSettings}>
                {/* {data.map((item, index) => (
                    <div key={index} className={styles.slideItem}>
                        <img
                            className={styles.slideImage}
                            src={item.src}
                            alt={item.alt}
                        />
                    </div>
                ))} */}
                <div className={styles.test}>
                    <h3>1</h3>
                </div>
                <div className={styles.test}>
                    <h3>1</h3>
                </div>
                 <div className={styles.test}>
                    <h3>1</h3>
                </div>
            </Slider>
        </div>
    );
}

export default UniversalSlider;