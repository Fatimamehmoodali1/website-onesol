'use client';

import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { useState } from 'react';
import './blog.css';

export default function Blog() { 
    const [menuOpen, setMenuOpen] = useState(false);
  return ( 
    <div> 

      {/* Hero Section */}
      <section className="hero">
        <img src="/images/Ellipse-4.png" alt="" className="hero-img left-circle" />
        <img src="/images/Ellipse-3.png" alt="" className="hero-img right-circle" />
        <img src="/images/rec.png" alt="" className="hero-img diagonal-rect" />
        <div className="hero-overlay">
           <h1 className="hero-title">Blog</h1>
           <p className="hero-breadcrumb">Home / Blog</p>
        </div>
      </section>

      {/* Top Orange Stripe */}
      <div className="about-stripe"></div>


  {/* Blog Section */}
  <section className="blog-section">
    <div className="container">
      <p className="blog-subtitle">NEWS AND ARTICLES</p>
      <h2 className="blog-title">OUR LATEST BLOG POSTS</h2>
      <p className="blog-description">
        Stay updated with the latest trends, insights, and success stories from the world of
        digital innovation. Explore how ONESOL is shaping the future with technology, creative
        strategies, and impactful solutions.
      </p>

      <div className="blog-cards">
        <div className="blog-card">
          <img src="/images/blog1.png" alt="Digital Pulse" />
          <div className="blog-card-title">Digital Pulse</div>
        </div>
        <div className="blog-card">
          <img src="/images/blog2.png" alt="Innovation Journal" />
          <div className="blog-card-title">Innovation Journal</div>
        </div>
        <div className="blog-card">
          <img src="/images/blog3.png" alt="ONESOL Insights" />
          <div className="blog-card-title">ONESOL Insights</div>
        </div>
      </div>
    </div>
  </section>

  {/* Circle Background with Title */}
  <section className="blog-section">
    <div className="left-cir">
      <img src="/images/Ellipse41.png" alt="" />
    </div>
    <h2 className="blog-heading">OUR LATEST BLOG POSTS</h2>
    <div className="right-cir">
      <img src="/images/Ellipse40.png" alt="" />
    </div>
  </section>

  {/* Services Grid */}
  <div className="services-grid">
    <div className="service-card">
      <img src="/images/service-1.png" alt="Web & App Development" />
      <p>Web & App Development</p>
    </div>
    <div className="service-card">
      <img src="/images/service-2.png" alt="Data Analytics & Business Intelligence" />
      <p>Data Analytics & Business Intelligence</p>
    </div>
    <div className="service-card">
      <img src="/images/service-3.png" alt="UI/UX Design" />
      <p>UI/UX Design</p>
    </div>
    <div className="service-card">
      <img src="/images/service-4.png" alt="E-commerce Development" />
      <p>E-commerce Development</p>
    </div>
    <div className="service-card">
      <img src="/images/service-5.png" alt="Cloud Solutions" />
      <p>Cloud Solutions</p>
    </div>
    <div className="service-card">
      <img src="/images/service-6.png" alt="Cybersecurity" />
      <p>Cybersecurity</p>
    </div>
  </div>

  {/* Brands Section */}
  <div className="brands-section">
        <h2 className="brand-heading">1K Brands Trust Us</h2>
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

      <div className='spacer'></div>
     {/* next */}
     <section className="experience-section"> 
    <div className="experience-container"> 
      <div className="experience-left"> 
        <h1 className="experience-heading">
           we rock <br /> your digital <br /> experiences
        </h1> 
        <button className="cta-button">Professional partner</button>
        <br  />
        <button className="cta-bton">GET INTO TOUCH WITH ONESOL</button>
      </div>
      <div className="experience-right">
      <div className="info-box">
        <div className="info-header">
          <h2>onesol is fast</h2>
          <span className="close-btn">✕</span>
        </div>
        <p className="info-description">
          we know the pain of traditional, development, trust us. At Onesol
          we&apos; re up to 10x faster than your current agency. Period.
        </p>

        <div className="accordion">
          <div className="accordion-item">
            <div className="accordion-title">
              Onesol will leave you breathless
              <span className="plus-icon">+</span>
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-title">
              Onesol has got you covered.
              <span className="plus-icon">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
     {/* next */}
    <section className="cta-section">
      <div className="cta-content">
        <div className="cta-texts">
          <p className="cta-subtitle">We&apos; re here to help to grow your business.</p>
          <h2 className="cta-title">Looking for the Best IT Business Solutions?</h2>
        </div>
        <button className="cta-btton">LEARN MORE</button>
      </div>

      {/* Decorative Circles */}
      <img src="/images/circle1.png" alt="circle1" className="circle circle1" />
      <img src="/images/circle2.png" alt="circle2" className="circle circle2" />
    </section>
    {/* next */}
    <footer className="footer">
      <div className="footer-gradient-overlay">
        <h1 className="footer-watermark">Onesol</h1>
      </div>

      <div className="footer-content">
        <div className="footer-column">
          <img src="/images/logo.png" alt="Logo" className="footer-logo" />
          {/* <h2>Onesol</h2> */}
          <p>
            With years of hands-on expertise, ONESOL transforms ambitious ideas
            into powerful digital realities. From strategic branding to advanced
            tech solutions, we help businesses conquer new heights.
          </p>
          <div className="footer-social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Links</h3>
          <ul>
            <li>About Us</li>
            <li>Meet our Team</li>
            <li>Works & Media</li>
            <li>Our Projects</li>
            <li>Contacts</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Newsletter</h3>
          <p>Signup for our latest news & articles. No spam.</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter address" />
            <button>→</button>
          </div>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <p>+971 50 9611550</p>
          <p>www.onesol.ae</p>
          <p>
            Business Center, Sharjah Publishing City Free Zone, Sharjah,
            United Arab Emirates
          </p>
          <button className="appointment-button">BOOK AN APPOINTMENT</button>
        </div>
      </div>

      <div className="footer-bottom">
        <span>Privacy Policy</span>
        <span>Terms & Conditions</span>
        <span>©2025 Onesol</span>
        <span>All Rights Reserved</span>
      </div>
    </footer>
</div>

); }
