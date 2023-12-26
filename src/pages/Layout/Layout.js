import React, {useEffect} from 'react';
import AnimatedCursor from 'react-animated-cursor';
import { styling } from "../Content";
import './Layout.css';

function Layout({ children }) {
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
    const imagesDirectory = require.context('./assets/images', false, /\.(png|jpe?g|svg)$/);
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
      {children}
    </div>
  );
}

export default Layout;
