import React from 'react';
import './App.css';
import Nav from './presentational/Header/Nav';
import Footer from './presentational/Footer/Footer';
import Main from './presentational/Main/Main';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
