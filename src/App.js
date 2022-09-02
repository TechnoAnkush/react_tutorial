//import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import OredrSummary from './components/OredrSummary';
import Use from './components/Use';
import ButtonCounter from './components/ButtonCounter';

function App() {
 
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="order-summary" element={<OredrSummary/>}/>
      </Routes>
      <Use/>
      <br></br>
      <ButtonCounter/>
    </div>
  );
}

export default App;
