import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Banner from './components/banner/Banner';
import RowPost from './components/RowPost/RowPost';
import {actions,orginals,comedy } from './urls'


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Banner/>
    <RowPost/>

    </div>
  );
}

export default App;
