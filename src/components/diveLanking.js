import styles from '../modules/_dive_lanking.module.scss'
import Anims from './animsArticle';
import anims from '../assets/anims_list/anims';
import { useRef, useEffect } from 'react';
import depth_inform from '../assets/info/depth_info'



function DiveLanking(){
    const buttonRef = useRef([]);
    const buttons = ['100m', '150m', '200m', '500m', '1000m', '1500m']

    const targetRef = useRef([]);
    const targets = ['100m', '150m', '200m', '500m', '1000m', '1500m'];

    useEffect(()=>{
        const buttonElement = buttonRef.current;
        const targetElement = targetRef.current;
        console.log(targetElement);
        
        for(let i = 0; i < buttons.length; i += 1){
            buttonElement[i].addEventListener('click', () => {
                targetElement[i].scrollIntoView({ behavior: 'smooth', block: 'end' });
            });

        }
    },[]);

    return(
        <div className={styles.base}>

            <div className={styles.remoteBox}>
                {
                    buttons.map((items, index) => (
                        <p key={items} ref={el => buttonRef.current[index] = el}>
                            {items}
                        </p>
                    ))
                }
            </div>
            <img src={`${process.env.PUBLIC_URL}/imgs/logo.png`} alt='logo' className={styles.remoteButton} />

            {
                targets.map((item, index) => (
                    <section key={item} ref={el => targetRef.current[index] = el}>
                        <Anims anims_for_display={anims[index]}/>
                        <p className={styles.depth_num}>{item}</p>
                        <div className={styles.depth_inform}>{depth_inform[index]}</div>
                    </section>
                ))
            }
        </div>
    );
};

export default DiveLanking;