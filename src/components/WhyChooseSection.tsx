'use client';
import React from 'react';
import '../styles/whychoosesection.css';

const WhyChooseSection = () => {
  return (
    <section className="why-choose-section">
      {/* Decorative circle background */}
      <img src="/images/Ellipse 6.png" alt="Decor" className="circle-bg" />

      <div className="container">
        <p className="what-we-offer">What We OFFER</p>
        <h2 className="choose-heading">WHY YOU SHOULD CHOOSE US</h2>
        <p className="choose-description">
          At Onesol, we combine creativity, technology, and strategy to deliver impactful digital solutions
          that grow your business. We’re more than a service provider—we’re your reliable partner
          dedicated to your success.
        </p>

        <div className="why-cards">
          {[
            {
              image: '/images/choose-1.png',
              icon: '/images/icon-1.png',
              text: 'Perfect solutions that business demands',
            },
            {
              image: '/images/choose-2.png',
              icon: '/images/icon-2.png',
              text: 'We Provide Powerful Product Strategy',
            },
            {
              image: '/images/choose-3.jpeg',
              icon: '/images/icon-3.png',
              text: 'Help your business grow worldwide',
            },
          ].map((item, index) => (
            <div className="why-card" key={index}>
              <div className="card-image">
                <img src={item.image} alt={`Service ${index + 1}`} />
              </div>
              <div className="icon-wrapper">
                <img src={item.icon} alt={`Icon ${index + 1}`} />
              </div>
              <p className="card-text">{item.text}</p>
            </div>
          ))}
        </div>
        {/* <img src="/images/Ellipse-7.png" alt="Decor" className="circle-bg-right" /> */}
      </div>
    </section>
  );
};

export default WhyChooseSection;