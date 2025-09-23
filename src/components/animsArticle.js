import styles from '../modules/_anims_article.module.scss'
import { Link } from 'react-router-dom';

function Anims(props){
    let items = props.anims_for_display.map((element) => {
        return (
            <Link to={`/detail/${element.name}`} className={styles.article_link}>
                <img src={element.path} alt={element.name}></img>
                {element.name}
            </Link>
        )
    })

    return(
        <>
            {items}
        </>
    );
};

export default Anims;