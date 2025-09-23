import styles from '../modules/_anim_detail.module.scss'

// Anims에 anims_list 전달

function AnimDetail(props){
    return(
        <div className={styles.base}>
            <img src={props.imgPath} alt={props.animName} className={styles.poster}/>

            <p className={styles.plot}>
                <h1>{props.animName}</h1>
                <span>{props.animPlot}</span>
            </p>
            <p className={styles.barrier}>
                <h1>진입장벽</h1>
                <span>{props.animBarrier}</span>
            </p>

        </div>
    );
};

export default AnimDetail;