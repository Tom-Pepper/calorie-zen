import React from 'react';
import './App.css';
import Header from './Header';
import Diary from './Diary';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Diary />
    </BrowserRouter>
  );
}

export default App;
