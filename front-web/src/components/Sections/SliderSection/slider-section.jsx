import React from "react";
import styles from './slider-section.module.css'
import BigSlider from "../../BigSlider/big-slider";
import bes from '../../../utils/assets/bes.jpg';


const sliderData = [
    {
        src: bes,
        alt: "Descrição da Imagem 1",
        title: "Primeiro Título Incrível",
        text: "Descrição curta para o primeiro slide.",
        type: "image"
    },
];

const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'ease'
}

const SliderSection = () => {
    return (
        <>
            <section
                id='slider'
                className={styles.sliderContainer}>
                <div className={styles.sliderArea}>
                    <BigSlider data={sliderData} 
                    settings={settings}>
                    </BigSlider>
                </div>
            </section>
        </>
    )
}

export default SliderSection;