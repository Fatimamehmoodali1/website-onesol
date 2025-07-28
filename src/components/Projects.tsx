'use client';

import React from 'react';
import '../styles/projects.css';

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects-inner">
        <div className="project-section">
          <div className="subheading">Our Completed Projects</div>
          <h2 className="main-heading">
            Improve & Enhance Our Tech <br /> Projects
          </h2>
          <p className="description">
            There are many variations of passages of available text but majority have suffered alteration in some form, by humour or randomised words which don't look even slightly believable.
          </p>
        </div>

        <div className="proj-cards">
          {[
            { src: '/images/project1.png', label: 'Tech Solutions' },
            { src: '/images/project2.png', label: 'Smart Visions' },
            { src: '/images/project3.png', label: 'Platform Integration' },
            { src: '/images/project4.png', label: 'Web Development' },
          ].map((item, index) => (
            <figure key={index} className="proj-card">
              <img src={item.src} alt={item.label} />
              <figcaption>{item.label}</figcaption>
              <div className="orange-lines">
                <span></span><span></span><span></span>
              </div>
            </figure>
          ))}
        </div>
      </div>

      <div className="brands-section">
        <div className="brands-bar">
          <div className="brand-logos">
            <img src="/images/image45.png" alt="brand" />
            <img src="/images/image46.png" alt="brand" />
            <img src="/images/image47.png" alt="brand" />
            <img src="/images/image48.png" alt="brand" />
            <img src="/images/image49.png" alt="brand" />
            <img src="/images/image50.png" alt="brand" />
            <img src="/images/image51.png" alt="brand" />
            <img src="/images/image52.png" alt="brand" />
            <img src="/images/image53.png" alt="brand" />
            <img src="/images/image54.png" alt="brand" />
          </div>
        </div>
      </div>

      <div className="spacer"></div>
    </section>
  );
};

export default Projects;