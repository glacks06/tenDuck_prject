import './css/App.css';
import {Header, Dive_lanking, About} from './components'
import { Routes, Route } from 'react-router-dom';

let arr = ['호랑이', '코끼리', '독수리'];
let brr = arr.map((value, key) => <li key={key}>{value}</li>)
console.log(brr);
// map함수 테스트중


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Dive_lanking />} />
        <Route path="/about" element={<About />} />
      </Routes>
      

    </div>
  );
}

export default App;