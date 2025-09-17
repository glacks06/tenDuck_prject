import styles from '../modules/_header.module.scss';


function Header(){
    return(
        <header className={styles.header_component}>
            <div className={styles.titleBox}>
                <img src={'/imgs/logo.png'}/>
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