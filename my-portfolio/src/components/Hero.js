import React from 'react';
import profileImg from '../assets/profile.jpg';
import linkedinIcon from '../assets/linkedin.png';
import githubLogo from '../assets/github.jpg';

import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* GitHub icon top-left */}
      <a
        href="https://github.com/SANPREET-KAUR/"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        <img src={githubLogo} alt="GitHub" className="github-icon" />
      </a>

      {/* LinkedIn icon top-right */}
      <a
        href="https://www.linkedin.com/in/sanpreet-kaur-b79077279/"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-link"
      >
        <img src={linkedinIcon} alt="LinkedIn" className="linkedin-icon" />
      </a>

      {/* Profile Image */}
      <img src={profileImg} alt="My Profile" className="profile-image" />

      {/* Hero Text */}
      <h1>Hi, I’m Sanpreet Kaur</h1>
      <p className="hero-role">B.Tech Student | Aspiring Full-Stack Developer</p>
      <p className="hero-description">
        I’m a passionate Computer Science student, exploring the world of web development 
        and problem-solving. Currently focusing on <strong>MERN Stack</strong>, 
        <strong> Java</strong>, and <strong>DSA</strong>. 
        Always curious, always learning 
      </p>

      {/* Buttons */}
      <div className="hero-buttons">
        <a href="#projects" className="btn">See My Work</a>
        <a href="#contact" className="btn btn-secondary">Let’s Connect</a>
      </div>
    </section>
  );
}

export default Hero;
