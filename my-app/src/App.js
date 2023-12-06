import Home from './pages/Home';
import About from './pages/About';
import Count from './pages/Counter';
import Input from './pages/Input';
import Card from './pages/Card';
import Memo from './pages/Memo';
import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link> | <Link to='/about'>About</Link> | <Link to='/Count'>Count</Link> | <Link to='/Input'>Input</Link> | <Link to='/Card'>Card</Link> | <Link to='/Memo'>Memo</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Count" element={<Count />} />
        <Route path="/Input" element={<Input />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/Memo" element={<Memo />} />
      </Routes>
    </div>
  );
}

export default App;
