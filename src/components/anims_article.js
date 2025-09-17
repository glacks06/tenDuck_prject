import styles from '../modules/_anims_article.module.scss'

function Anims(props){
    let items = props.anims_for_display.map((element) => {
        return (
            <article>
                <img src={element.path}></img>
                {element.name}
            </article>
        )
    })

    return(
        <>
            {items}
        </>
    );
};

export default Anims;