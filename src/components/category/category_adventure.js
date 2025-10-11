import {anims_action_adventure, anims_daily_longrun, anims_drama_sf, anims_isekai_fantasy, anims_romance_comedy} from '../../assets/anims_list/anims_category';
import Anims from '../animsArticle';



function Adventure(){

    return(
        <>
            {
                anims_action_adventure.map((item) => (
                    <Anims anims_for_display={item}/>
                ))
            }
        </>
    );
};

export default Adventure;