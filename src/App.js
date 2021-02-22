import logo from './logo.svg';
import React from 'react';
import './App.css';
import Particles from 'react-particles-js';

function App() {
  return (
    <div>
      <>
        <Particles id="particles-js" />

        <div id="hero" class="jumbotron">
          <div class="container">
            <h1 class="hero-title" class="load-hidden">
              Hi, my name is <span class="text-color-main">Tibor Tóth</span>
              <br />
              I'm the Developer <span class="text-danger">You </span>need
            </h1>
            <p class="hero-cta" class="load-hidden">
              <a class="cta-btn cta-btn--hero" href="#about">
                Know more
              </a>
            </p>
          </div>
        </div>
      </>
    </div>
  );
}

export default App;
