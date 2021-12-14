import logo from '../../images/logo.svg'
import styles from './styles.module.sass'

export function Menu () {
    return (
        <nav className={styles.contentWrapper}>
            <img src={logo} alt="Logo" />
            <a href="https://github.com/eucarlos/landpage-react">Ir para o repositório</a>
        </nav>
    )
}