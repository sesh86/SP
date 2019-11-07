import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';


import './App.css';
import Dashboard from './components/Dashboard.js';
import Login from './components/Login.js';

function App() {
  return(
    <div>
    <div>
    <Header />
  </div>
   <div id="content">
          <Login />
   </div>
  <div>
  <Footer />
</div>
</div>
    )
}

export default App;
