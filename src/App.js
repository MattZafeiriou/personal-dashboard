import React from 'react';
import './App.css';
import NavbarApp from './Components/NavbarApp.js';

function App() {
  const mainStyle = {
    margin: '20px'
  }
  return (
    <div style={mainStyle}>
      <NavbarApp/>
    </div>
  );
}

export default App;
