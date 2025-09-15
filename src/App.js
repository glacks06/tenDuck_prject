import './css/App.css';
import Header from './components/header'

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Dive_lanking />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      

    </div>
  );
}

export default App;