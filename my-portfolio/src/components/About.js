import React, { useState, useRef } from 'react';
import chitkaraImg from '../assets/chitkara.jpg';
import './About.css';
import imageBg from '../assets/image.png';

function About() {
  const [hoveredCollege, setHoveredCollege] = useState(false);
  const [imagePosition, setImagePosition] = useState('bottom');
  const collegeRef = useRef(null);

  const handleMouseEnter = () => {
    if (collegeRef.current) {
      const rect = collegeRef.current.getBoundingClientRect();
      const spaceAbove = rect.top;
      const spaceBelow = window.innerHeight - rect.bottom;

      if (spaceAbove > 220) {
        setImagePosition('top');
      } else {
        setImagePosition('bottom');
      }
    }
    setHoveredCollege(true);
  };

  const handleMouseLeave = () => {
    setHoveredCollege(false);
  };

  return (
    <div className="about-box" style={{ backgroundImage: `url(${imageBg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", minHeight: "100vh", color: "white" }}>

      <p>
        Hi! I'm <strong>Sanpreet</strong>, a passionate and curious B.Tech student currently
        studying at{" "}
        <span
          ref={collegeRef}
          className="college-text"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Chitkara University
        </span>
        . I'm a passionate developer who loves transforming ideas into impactful solutions. 
        Whether it's <strong>full-stack web development</strong>, <strong>machine learning</strong>, 
        or <strong>DSA</strong>, I enjoy tackling challenges that push me to think deeper and code smarter.
        <br />
        What sets me apart is my focus on clarity and elegance—I don't just build projects that work, 
        I build them to scale, perform, and look great. Beyond coding, I'm driven by curiosity, 
        problem-solving, and the excitement of learning something new every day.
      </p>

      {hoveredCollege && (
        <img
          src={chitkaraImg}
          alt="Chitkara University"
          className={`college-image ${imagePosition}`}
        />
      )}
    </div>
  );
}

export default About;
