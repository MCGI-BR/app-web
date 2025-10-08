import styles from './card.module.css'
import Button from '../Button/button.jsx'


const Card = ({ cardImage, cardAlt, title }) => {
    return (
        <>
            <div className={styles.card}>
                <img src={cardImage} alt={cardAlt} />
                <div className={styles.contentArea}>
                    <h2>{title}</h2>
                    <Button
                        bgColor="#FDAD00"
                        textColor="var(--cor-branco)"
                        fontSize={"24px"}
                        padding={"0.5rem 4rem"}

                        href="#saiba-mais">
                        SAIBA MAIS
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Card;