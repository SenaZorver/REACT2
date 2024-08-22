import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from '.src/pages/About';
import Products from '.src/pages/Products';
import Contact from '.src/pages/Contact';
import NotFoundPage from '.src/NotFoundPage';
import Header from "./components/Header";
function App() {
  const [state, setState] = useState(null);

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFoundPage />} />


      </Routes>
    </div>
  )
}

export default App