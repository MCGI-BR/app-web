import React from 'react';
import Slider from 'react-slick';
import styles from './big-slider.module.css';
import SliderMedia from '../SliderMedia/slider-media';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BigSlider = ({ data, settings }) => {

    const sliderData = data || [];

    const defaultSettings = {
        dots: true,
        infinite: true,
        speed: 800,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: false,
        adaptiveHeight: true,
    };

    const sliderSettings = { ...defaultSettings, ...settings };

    return (
        <>
            <div className={styles.sliderWrapper}>
                <Slider {...sliderSettings}>
                    {sliderData.map((item, index) => (
                        <div key={index} className={styles.bigSliderItem}>
                            <SliderMedia
                                mediaImage={item.src }
                                mediaAlt={item.src || "Test"}
                                title={item.src || "Test"}
                                text={item.src || "Test"}
                                type={item.type}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default BigSlider;