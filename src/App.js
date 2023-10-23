import React from 'react';
import './App.css';
import NavbarApp from './Components/NavbarApp.js';
import Sidebar from './Components/Sidebar.js';
import Widget from './Components/Widget';

function App() {

  const mainStyle = {
    padding: '5px',
    height: '100vh',
    background: 'rgb(22,73,117)',
    background: 'linear-gradient(180deg, rgba(22,73,117,1) 0%, rgba(67,172,176,1) 100%)',
    display: 'block'
  }
  const secondaryStyle = {
    display: 'flex',
  }

  return (
    <div style={mainStyle}>
      <Widget component={<NavbarApp/>}/>
      <div style={secondaryStyle}>
        <Widget component={<Sidebar/>}/>
        <Widget component={<Sidebar/>}/>
      </div>
    </div>
  );
}

export default App;
