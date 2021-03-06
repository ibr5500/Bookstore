import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
