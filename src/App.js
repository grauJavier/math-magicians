import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import Home from './components/Home';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
