import React from 'react';
import './App.css';
import hatch from './hatch.png';

const Layout = ({ children }) => {

  return(
    <div className="App">
    
      <div className='App-container'>
        <span className="hatch-studio-logo-combination-">
          <img src={hatch} alt='hatch_logo' className='logo' />
        </span>

        <main className='container'>
          { children }
        </main>
      </div>
    </div>
);

}

export default Layout;
