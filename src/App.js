import React from 'react';
import Home from './Home';
import Contact from './Contact';
import Aboutme from './Aboutme';
import Projects from './Projects';
import {Routes, Route} from 'react-router-dom';
import './App.css';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<Aboutme/>} />
        <Route exact path="/projects" element={<Projects/>} />
        <Route exact path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App