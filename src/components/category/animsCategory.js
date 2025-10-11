import styles from '../../modules/_anims_category.module.scss'
import {anims_action_adventure, anims_daily_longrun, anims_drama_sf, anims_isekai_fantasy, anims_romance_comedy} from '../../assets/anims_list/anims_category';
import { Routes, Route, Link} from 'react-router-dom';
import Adventure from './category_adventure';



function AnimsCategory(){

    return(
        <div className={styles.base}>
            <ul className={styles.sideNav}>
                <li><Link to={"adventure"}>모험물</Link></li>
                <li><Link to={"daily"}>일상물</Link></li>
                <li><Link to={"dramaAndSF"}>드라마/SF</Link></li>
                <li><Link to={"isekai"}>이세계물</Link></li>
                <li><Link to={"romance"}>로맨스물</Link></li>
            </ul>
            
            <div className={styles.articlesBox}>
                
                <Routes>
                    <Route path="adventure" element={<Adventure />} />
                    {/* <Route path="/category/daily" element={<DiveLanking />} />
                    <Route path="/category/dramaAndSF" element={<DiveLanking />} />
                    <Route path="/category/isekai" element={<DiveLanking />} />
                    <Route path="/category/romance" element={<DiveLanking />} /> */}

                </Routes>
            </div>

            
        </div>
    );
};

export default AnimsCategory;