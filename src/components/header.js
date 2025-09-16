import styles from '../modules/_header.module.scss';
import logoImg from '../assets/imgs/logo.png'

function Header(){
    return(
        <header className={styles.header_component}>
            <div className={styles.titleBox}>
                <img src={logoImg}/>
                <p>TenDuck</p>
            </div>

            <ul className={styles.navigation}>
                <li>Dive Lanking</li>
                <li>About</li>
            </ul>
        </header>

    );
};

export default Header;