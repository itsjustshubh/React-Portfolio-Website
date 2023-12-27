import React, {useEffect} from 'react';
import AnimatedCursor from 'react-animated-cursor';
import { styling } from "../Content";
import { NavLink } from 'react-router-dom';
import './Layout.css';

function Layout({ children, loading }) {
  const cursorConfig = {
      innerSize: 0.015 * window.innerHeight, // Size of the inner cursor circle
      outerSize: 0.04 * window.innerHeight, // Size of the outer cursor circle
      color: '256, 256, 256', // RGB equivalent of orangered
      outerAlpha: 0.4, // Transparency of the outer cursor circle
      innerScale: 0.5, // Scale of the inner cursor circle on hover
      outerScale: 2, // Scale of the outer cursor circle on hover
  };

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

      {!loading && ( // Conditionally render the navbar based on the loading state
        <div className="navbar">
            <ul>
              <li><NavLink to="/" className="nav-link">Home</NavLink></li>
              <li><NavLink to="/education" className="nav-link">Education</NavLink></li>
              <li><NavLink to="/projects" className="nav-link">Projects</NavLink></li>
              <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
              {/* Add other navigation links as needed */}
            </ul>
        </div>
      )}

      {children}
    </div>
  );
}

document.querySelectorAll('.navbar ul li a').forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.transition = 'all 0.8s ease-in';
  });

  item.addEventListener('mouseout', () => {
    item.style.transition = 'all 0.5s ease-out';
  });
});

export default Layout;
