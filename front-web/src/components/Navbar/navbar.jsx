import '../../utils/global.css';
import styles from './navbar.module.css';
import Brand from '../../utils/assets/brand.png'

function Navbar() {
    return (
        <>
            <nav className={styles.navbar} aria-label='navegacao principal do site'>
                <div className={styles.brand}>
                    <a href="#hero">
                        <img 
                        src={Brand}
                        alt="Logo dos MIDI"
                        className={styles.brandImg} />
                    </a>
                </div>
                <ul className={styles.menu}>
                    <li className={styles.menuItem}>
                        <a href="">Página Inicial</a>
                    </li>
                    <li className={styles.menuItem}>
                        <a href="">Conheça-nos</a>
                    </li>
                    <li className={styles.menuItem}>
                        <a href="">Contatos</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;