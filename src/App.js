import React from 'react';
import './App.css';
import Particles from 'react-particles-js';

function App() {
  return (
    <div>
      <div className="scale-in-center" id="welcome">
        <h1>Welcome</h1>
      </div>
      <Particles
        id="particles-js"
        params={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: '#424deb',
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#fcfcfc',
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: 'img/github.svg',
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 4,
              random: true,
              anim: {
                enable: true,
                speed: 5,
                size_min: 4.86914181375533,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#424deb',
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: 'none',
              random: true,
              straight: false,
              out_model: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotatex: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
              onclick: {
                enable: true,
                mode: 'push',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              buble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
}

export default App;
