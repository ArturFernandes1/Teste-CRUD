import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import Listarproduto from './pages/Listarproduto';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Listarproduto" element={<Listarproduto />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
