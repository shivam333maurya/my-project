import React from 'react';
import logo from './logo.svg';
import { Counter } from './Components/counter/counter';
import './App.css';
import Calculator from './pages/Calci';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Counter /> */}
        <Calculator/>
      </header>
    </div>
  );
}

export default App;
