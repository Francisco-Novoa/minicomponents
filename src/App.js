import React from 'react';
import './App.css';
import Navbar from './componentes/navbar';
// Add css files
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'font-awesome/css/font-awesome.min.css'; // 4.x
import '@fortawesome/fontawesome-free/css/all.css'; // 5.x
// Add js files
import 'jquery';
import 'popper.js';
import 'bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
