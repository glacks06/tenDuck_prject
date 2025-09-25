import styles from '../modules/_about.module.scss';

function About(){
    return(
        <div className={styles.base}>
            <div className={styles.inner}>
                <p>
                    <h1>TenDuck은?</h1>
                    애니메이션의 장르나 인기순을 기반으로한 추천은 많지만 얼마나 씹덕적인지
                    혹은 얼마나 진입장벽이 높은지를 기반으로한 추천 시스템(혹은 랭킹 정리 문서)는 별로 없었다.<br/>
                    따라서 바다의 수심에 빗대어서 랭킹의 밑으로 내려갈수록 일반인들로써 진입장벽이 높은 작품들을 위치시켜놓았다.
                </p>
                <p>
                    <h1>기준은?</h1>
                    해당 랭킹의 기준은 웹페이지 제작자가 주관적으로 정한것이기에 
                    "이 작품은 더 아래에 있어야 할 것 같은데?"와 같은 생각이 들 수도 있다.<br/>
                    물론 추후에 인터넷에서 다른 사람들의 의견과 주변 사람들의 의견들을 듣고 조정하는 과정을 거칠 것이다.<br/>
                    그럼에도 주관적인 부분이 들어가는 것은 어쩔 수 없기에 양해해라.<br/>
                    참고로 같은 수심의 작품들간 순서는 랭킹과 무관하다.
                </p>
                <p>
                    <h1>Version</h1>
                    v0.0.1
                </p>
            </div>
        </div>
    );
};

export default About;