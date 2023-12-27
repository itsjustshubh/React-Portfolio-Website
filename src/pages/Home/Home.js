import React, { useState, useEffect } from "react";
import './Home.css';
import {data, skills} from "../Content";
import { NavLink } from "react-router-dom";
import ReactTyped from "typewriter-effect";
import imageOne from '../../assets/images/home/image-one.png';
import imageTwo from '../../assets/images/home/image-two.png';
import imageThree from '../../assets/images/home/image-three.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home({loaded}) {
  // State declarations
  const [loading, setLoading] = useState(loaded);
  const [slideLoading, setSlideLoading] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // State for current skill index remains the same
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [skillFadeOut, setSkillFadeOut] = useState(false);
  const skillsLength = skills.length; // Length of the skills array

  useEffect(() => {
    const skillInterval = setInterval(() => {
      setSkillFadeOut(true); // Start fade out
      setTimeout(() => {
        setCurrentSkillIndex((prevIndex) =>
          (prevIndex + 1) % skillsLength
        );
        setSkillFadeOut(false); // Reset for fade in
      }, 1000); // Change skill after fade out (1s duration)
    }, 4000); // Change skill every 4 seconds (includes 1s for fade out)

    return () => clearInterval(skillInterval);
  }, []);

  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const [subtitleFadeOut, setSubtitleFadeOut] = useState(false);
  const subtitlesLength = data.animated.length; // Assuming data.animated is an array of strings

  useEffect(() => {
    const subtitleInterval = setInterval(() => {
      setSubtitleFadeOut(true); // Start fade out
      setTimeout(() => {
        setCurrentSubtitleIndex(prevIndex =>
          (prevIndex + 1) % subtitlesLength
        );
        setSubtitleFadeOut(false); // Reset for fade in
      }, 3000); // Change subtitle after fade out (1s duration)
    }, 4000); // Change subtitle every 4 seconds (includes 1s for fade out)

    return () => clearInterval(subtitleInterval);
  }, []);

  // Effects for loading and cursor movement
  useEffect(() => {
    if (!loaded) {
      // Show loading screen only if not loaded before
      const timer = setTimeout(() => {
        setSlideLoading(true);
        setTimeout(() => setLoading(false), 3000);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [loaded]); // Dependency on loaded

  return (
    <div className="App">
      {loading && (
        <div className={`loading-background ${slideLoading ? 'slide-out' : ''}`}>
            <div className="loader">
                <span className="name">{data.title} </span>
                <span className="portfolio"> {data.displayedPurpose}</span>
            </div>
        </div>
      )}

        {!loading && (
            // Your main app content goes here
            <div className="App" style={{backgroundColor: "black"}}>
              {/*<button className="hamburger" onClick={toggleMenu}>*/}
              {/*  &#9776; /!* Hamburger Icon *!/*/}
              {/*</button>*/}

              {/* Vertical Menu */}
              {/*<nav className={`vertical-menu ${menuOpen ? 'open' : ''}`}>*/}
              {/*  <ul className="vertical-menu">*/}
              {/*    <li><NavLink to="/" className="nav-link">Home</NavLink></li>*/}
              {/*    <li><NavLink to="/education" className="nav-link">Education</NavLink></li>*/}
              {/*    <li><NavLink to="/projects" className="nav-link">Projects</NavLink></li>*/}
              {/*    <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>*/}
              {/*    /!* Add other navigation links here *!/*/}
              {/*  </ul>*/}
              {/*</nav>*/}

              <div className="center-text">
                <div
                    className="text-container"
                    onMouseEnter={() => {
                      setShowReadMore(true);
                      setShowImage(true);
                    }}
                    onMouseLeave={() => {
                      setShowReadMore(false);
                      setShowImage(false);
                    }}
                >
                  <div className={`me-text ${showReadMore ? 'hidden' : ''}`}>me?</div>
                  {showReadMore && <div className="read-more-text">Read More</div>}
                </div>
              </div>

              {showImage && (
                  <div className="image-container">
                    <img src={imageOne} alt="Example" className="main-image-one"/>
                    <img src={imageTwo} alt="Example" className="main-image-two"/>
                    <img src={imageThree} alt="Example" className="main-image-three"/>
                    {/* Add more images here */}
                  </div>
              )}

              <div className="title">
                {data.title}
              </div>

              <h1 className="subtitle">
                <ReactTyped
                    options={{
                      strings: data.animated,
                      autoStart: true,
                      delay: 50,
                      loop: true,
                      deleteSpeed: 2,
                    }}
                />
              </h1>
              {/*<h1 className={`subtitle subtitle-container${subtitleFadeOut ? 'fade-out' : ''}`}>*/}
              {/*  {data.animated[currentSubtitleIndex]}*/}
              {/*</h1>*/}

              <div className="websitePurpose">
                {data.websitePurpose}
              </div>

              <div className="description">
                {data.description.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br/>
                    </React.Fragment>
                ))}
              </div>

              <div className="language">
                {data.skill}
              </div>

              <h1 className="languages">
                {/*<ReactTyped*/}
                {/*    options={{*/}
                {/*      strings: skills,*/}
                {/*      autoStart: true,*/}
                {/*      delay: 50,*/}
                {/*      loop: true,*/}
                {/*      deleteSpeed: 6,*/}
                {/*      cursor: ">",*/}
                {/*    }}*/}
                {/*/>*/}
                <div className={`skill-container ${skillFadeOut ? 'fade-out' : ''}`}>
                  <FontAwesomeIcon icon={skills[currentSkillIndex].icon}/>&nbsp;&nbsp;
                  {skills[currentSkillIndex].name}
                </div>
              </h1>
            </div>
        )}
    </div>
  );
}

export default Home;