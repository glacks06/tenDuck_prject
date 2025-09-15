import './css/App.css';
import {Header, Dive_lanking, About} from './components'
import { Routes, Route } from 'react-router-dom';

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