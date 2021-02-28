import React from 'react';
import './Button.css';

function Button() {
  return (
    <div>
      <button>
        <a id='buttonLink' href="#projects">
          <p className="more">Let's go</p>
        </a>
      </button>
    </div>
  );
}

export default Button;
