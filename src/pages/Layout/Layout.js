import React, { useState, useEffect } from 'react';
import AnimatedCursor from 'react-animated-cursor';
import { NavLink } from 'react-router-dom';
import { styling } from "../Content"; // Ensure this path is correct
import './Layout.css';

function Layout({ children }) {
  const cursorConfig = {
      innerSize: 0.015 * window.innerHeight,
      outerSize: 0.04 * window.innerHeight,
      color: '256, 256, 256',
      outerAlpha: 0.4,
      innerScale: 0.5,
      outerScale: 2,
  };

  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const controlNavbar = () => {
        if (window.scrollY > 250) {
            setShowNavbar(false);
        } else {
            setShowNavbar(true);
        }
    };

    window.addEventListener('scroll', controlNavbar);

    // Debugging state change
    console.log('Navbar Visible:', showNavbar);

    return () => {
        window.removeEventListener('scroll', controlNavbar);
    };
  }, [showNavbar]);


  function preloadImagesFromDirectory(directory) {
      const images = directory.keys().map(directory);
      images.forEach((imageSrc) => {
        const img = new Image();
        img.src = imageSrc;
      });
  }

  function preloadVideo(videoSrc) {
    const video = document.createElement('video');
    video.src = videoSrc;
    video.onloadeddata = () => {
      console.log('Background video preloaded');
    };
  }

  useEffect(() => {
    // Preload images
    const imagesDirectory = require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/);
    preloadImagesFromDirectory(imagesDirectory);

    // Preload background video
    preloadVideo(styling.background);
  }, []);

  return (
    <div className="layout-background">
      <AnimatedCursor {...cursorConfig} />
      <video className="background-video" autoPlay muted loop playsInline>
        <source src={styling.background} type="video/mp4"/>
      </video>

        <div className={`navbar ${!showNavbar ? 'navbar-hidden' : ''}`}>
            <ul>
                <li><NavLink to="/" className="nav-link">Home</NavLink></li>
                <li><NavLink to="/education" className="nav-link">Education</NavLink></li>
                <li><NavLink to="/projects" className="nav-link">Projects</NavLink></li>
                <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
            </ul>
        </div>

        {children}
    </div>
  );
}

export default Layout;
