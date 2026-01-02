import React from "react";
import styles from "./slider-media.module.css"

const SliderMedia = ({mediaImage, mediaAlt, title, text, type}) => {
    return (
        <>
        <div className={styles.content}>
            <img src={mediaImage} alt={mediaAlt} />
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
        </>
    )
}

export default SliderMedia