
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Serviços from './pages/Serviços';
import Contatos from './pages/Contatos';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicos" element={<Serviços />} />
        <Route path="/contato" element={<Contatos />} />
      </Routes>
    </Router>
  );
}

export default App;
