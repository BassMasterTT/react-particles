import React from 'react';
import './ProjectCard.css';

function ProjectCard() {
  return (
    <div>
      <div className="grid-container">
        <div className="grid-item">
          <h4>Infinite Scroll</h4>
          <img src="././unsplashAPI.png" alt="unsplash"></img>
          <p className="p">
            This project inplements the Unsplash API to generate an infinite
            scroll of beautiful high quality pictures. You can click on any of
            them to find out details and to save the pictures in variuos sizes.
            Try out the website and enjoy the mood these pictures give you.
          </p>
        </div>
        <div className="grid-item">
          <h4>Joke Teller Web App</h4>
          <img src="././joke.png" alt="joke"></img>
          <p className="p">
            A project that was really fun to make. My website is presenting you
            a friendly robot that every time that you press the button it will
            tell you a different joke related to computer science. Hope that you
            can catch some of the jokes, even if you are not a geek.
          </p>
        </div>
        <div className="grid-item">
          <h4>Calculator</h4>
          <img src="././calculator.png" alt="calculator"></img>
          <p className="p">
            A simple but beautiful calculator that works directly in your web
            browser. It was built using HTML, CSS and JavaScript. I used a
            gradient for the background and big buttons so you can clearly type
            on them. Ok, now it's your turn to use it and see where did you go
            over your budget this month.
          </p>
        </div>
        <div className="grid-item">
          <h4>Quote Generator </h4>
          <img src="././quote.png" alt="quotes"></img>
          <p className="p">
            Some of the quotes are really profound. You can use this website to
            get as many quotes as you like, or maybe just one quote to let you
            meditate about it for the whole day. It's up to you. A lot of wisdom
            at the push of a single virtual button. Sounds great, right?
          </p>
        </div>
        <div className="grid-item">
          <h4>NASA Pictures API</h4>
          <img src="././NASA.png" alt="NASA Pictures"></img>
          <p className="p">
            I was always fascinated by planets, stars, galaxies, black holes and
            everything else related to the universe. So many questions and not
            so many certain answers. This website will feed you a huge amount of
            amazing photos form the NASA API. Go take a look!
          </p>
        </div>
        <div className="grid-item">
          <h4>Second Project</h4>
          <img src="././unsplashAPI.png" alt="unsplash"></img>
          <p className="p"></p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
