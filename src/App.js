import './css/App.css';

import {Header, DiveLanking, About, AnimDetail} from './components'
import { Routes, Route } from 'react-router-dom';
import anims from './assets/anims_list/anims';


const anim_routers = Array.from({ length: 5 });


for(let i = 0; i < anims.length; i += 1){
  anim_routers[i] = anims[i].map((elmt) => {
    return (
      <Route path={`/detail/${elmt.name}`} element={<AnimDetail animName={elmt.name} imgPath={elmt.path} animPlot={elmt.plot} animBarrier={elmt.barrier}/>} />
    );
  });
}



function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/tenDuck_prject" element={<DiveLanking />} />
        <Route path="/about" element={<About />} />
        {anim_routers}

      </Routes>
      

    </div>
  );
}

export default App;