import React from 'react';

import Navbar from './components/Navbar';
import Routes from './Routes';

const App = () => {
  return (
    <div id="container">
      <header>
        <h3> Company Name</h3>
        <nav id="navContainer">
          <Navbar />
          <Routes />
        </nav>
      </header>
      <section id="body">
        <div id="aboutUsContainer">
          <h3> About Us Section </h3>
          <p> This is Where we will write Why Our Chips are the best! </p>
        </div>
      </section>
    </div>
  );
};

export default App;
