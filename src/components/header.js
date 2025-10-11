import styles from '../modules/_header.module.scss';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header className={styles.header_component}>
            <div className={styles.titleBox}>
                <img src={`${process.env.PUBLIC_URL}/imgs/logo.png`} alt='logo'/>
                <p><Link to={'/'}>TenDuck</Link></p>
            </div>

            <ul className={styles.navigation}>
                <li><Link to={'/'}>Dive Lanking</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/category'}>Category</Link></li>
            </ul>
        </header>

    );
};

export default Header;