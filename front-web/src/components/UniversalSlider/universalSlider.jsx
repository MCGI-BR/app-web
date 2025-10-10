import React from 'react';
import Slider from 'react-slick';
import styles from './universal-slider.module.css';
import Card from '../Card/card';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const UniversalSlider = ({ data, settings }) => {

    const sliderData = data || [];

    const defaultSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const sliderSettings = { ...defaultSettings, ...settings };

    return (
        <div className={styles.sliderWrapper}>
            <Slider {...sliderSettings}>
                {sliderData.map((item, index) => (
                    <div key={index} className={styles.slideItem}>
                        <img src={item.src}
                            alt={item.alt}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default UniversalSlider;