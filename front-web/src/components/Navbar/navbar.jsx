import '../../utils/global.css';
import styles from './navbar.module.css'

function Navbar() {
    return (
        <>
        <nav className={styles.navbar} aria-label='navegacao principal do site'>
            <div className={styles.brand}>
                <ul className={styles.menu}>
                    <li className={styles.menu_item}>
                        <a href="">Página Inicial</a>
                    </li>
                    <li className={styles.menu_item}>
                        <a href="">Conheça-nos</a>
                    </li>
                    <li className={styles.menu_item}>
                        <a href="">Contatos</a>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar;