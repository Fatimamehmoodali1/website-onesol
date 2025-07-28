"use client";

import React from 'react';
import '../styles/achivement.css';

const Achievement = () => {
  return (
    <section className="achievements">
      <div className="achieve-left">
        <h4>Achievements</h4>
        <h2>
          SOME NUMBER OF<br />OUR ACHIEVEMENTS
        </h2>
        <p>
          With over 10 years of experience, 200+ successful projects, and a 95% client satisfaction rate, our numbers speak for themselves.
          We turn ideas into results and build lasting digital success stories.
        </p>
        <button className="cta-btn">GeT Started →</button>
      </div>

      <div className="kite-layout">
        <div className="achievement-box top">
          <img src="/images/icon2.png" alt="Satisfied Clients" />
          <p>3,850</p>
          <p>Satisfied Clients</p>
        </div>
        <div className="achievement-box left">
          <img src="/images/icon3.png" alt="Projects Completed" />
          <p>8,550</p>
          <p>Projects Completed</p>
        </div>
        <div className="achievement-box right">
          <img src="/images/icon1.png" alt="Team Lead" />
          <p>90+</p>
          <p>Team Lead</p>
        </div>
        <div className="achievement-box bottom">
          <img src="/images/icon4.png" alt="Award Winning" />
          <p>80+</p>
          <p>Award Winning</p>
        </div>
      </div>
    </section>
  );
};

export default Achievement;