import logo from './logo.svg';
import React from 'react';
import './App.css';
import Particles from 'react-particles-js';

function App() {
  return (
    <div>
      <div id="welcome" class="jumbotron">
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
        <div>
          <div id='about' class='about'>

          </div>
        </div>
      </div>
      <Particles
        id="particles-js"
        // params={{
        //   particles: {
        //     number: {
        //       value: 400,
        //       density: {
        //         enable: true,
        //         value_area: 1000,
        //       },
        //     },
        //     color: {
        //       value: '#fff',
        //     },
        //     opacity: {
        //       value: 0.5,
        //       anim: {
        //         enable: true,
        //       },
        //     },
        //     size: {
        //       value: 7,
        //       random: true,
        //       anim: {
        //         enable: true,
        //         speed: 3,
        //       },
        //     },
        //     line_linked: {
        //       enable: false,
        //     },
        //     move: {
        //       speed: 0.2,
        //     },
        //   },
        // }}
      />
    </div>
  );
}

export default App;
