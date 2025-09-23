import styles from '../modules/_dive_lanking.module.scss'
import Anims from './animsArticle';
import anims from '../assets/anims_list/anims';

// Anims에 anims_list 전달

function Dive_lanking(){
    return(
        <div className={styles.base}>
            <section>
                <Anims anims_for_display={anims[0]}/>
                <p className={styles.depth_num}>100m</p>
                <div className={styles.depth_inform}>완전 메이저. 일반인한테 추천해도 이상하게 보이지 않음</div>
            </section>
            <section>
                <Anims anims_for_display={anims[1]}/>
                <p className={styles.depth_num}>150m</p>
                <div className={styles.depth_inform}>메이저라고 하기엔 아주 살짝 애매. 패션씹덕이거나 입덕부정기일 가능성이 있음</div>
            </section>
            <section>
                <Anims anims_for_display={anims[2]}/>
                <p className={styles.depth_num}>200m</p>
                <div className={styles.depth_inform}>진입장벽은 낮은데 인지도가 없는 작품</div>
                
            </section>
            <section>
                <Anims anims_for_display={anims[3]}/>
                <p className={styles.depth_num}>500m</p>
                <div className={styles.depth_inform}>약간의 진입장벽. 일반인이 애니를 보았을 때 표정이 썩기 시작하는 구간?</div>
            </section>
            <section>
                <Anims anims_for_display={anims[4]}/>
                <p className={styles.depth_num}>1000m</p>
                <div className={styles.depth_inform}>진입어려움.</div>
            </section>
            <section>
                <Anims anims_for_display={anims[5]}/>
                <p className={styles.depth_num}>1500m</p>
                <div className={styles.depth_inform}>쉽지않은 주제, 심연인가 싶은 작품</div>
            </section>
        </div>
    );
};

export default Dive_lanking;