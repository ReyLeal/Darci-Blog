import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="Darci-Blog-App">
        <Navbar/>
      </div>
    </BrowserRouter>
  );
}

export default App;
