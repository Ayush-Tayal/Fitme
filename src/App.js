import React from 'react';
import './App.css';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        
        <Home/>
      </Router>
    </div>
  );
}

export default App;
