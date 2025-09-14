import styles from '../modules/_header.module.scss';
import logoImg from '../assets/imgs/logo.png'

// console.log(Object.keys(styles))


function Header(){
    return(
        <header className={styles.header_component}>
            <div className={styles.titleBox}>
                <img src={logoImg}/>
                <p>TenDuck</p>

            </div>
        </header>

    );
};

export default Header;