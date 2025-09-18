import styles from '../modules/_dive_lanking.module.scss'
import Anims from './anims_article';
import anims from '../assets/anims_list/anims';

// Anims에 anims_list 전달

function Dive_lanking(){
    return(
        <div id={styles.base}>
            <section>
                <Anims anims_for_display={anims[0]}/>
                <div>100m</div>
            </section>
            <section>
                <Anims anims_for_display={anims[1]}/>
                <div>150m</div>
            </section>
            <section>
                <Anims anims_for_display={anims[2]}/>
                <div>200m</div>
            </section>
                        <section>
                <Anims anims_for_display={anims[3]}/>
                <div>500m</div>
            </section>
            <section>
                <Anims anims_for_display={anims[4]}/>
                <div>1000m</div>
            </section>
            <section>
                <Anims anims_for_display={anims[5]}/>
                <div>1500m</div>
            </section>
        </div>
    );
};

export default Dive_lanking;