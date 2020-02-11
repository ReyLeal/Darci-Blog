import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Home from './Pages/HomePage/HomePage'
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="Darci-Blog-App">
        <Navbar/>
        <Route exact path='/' component={Home}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
