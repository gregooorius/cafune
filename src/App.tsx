import React from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import { Outlet } from "react-router-dom";


function App() {
  
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={require("./cafune.JPG")} className="App-logo" alt="logo" />
        <p>Comming soon...</p>
      </header> */}
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
