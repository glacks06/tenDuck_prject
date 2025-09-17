import styles from '../modules/_dive_lanking.module.scss'
import Anims from './anims_article';
import anims from '../assets/anims_list/anims';

// Anims에 anims_list 전달

function Dive_lanking(){
    return(
        <div id={styles.base}>
            <section>
                <Anims anims_for_display={anims[0]}/>
            </section>
            {/* <section>
                0
            </section>
            <section>
                0
            </section> */}
        </div>
    );
};

export default Dive_lanking;