import React from 'react';
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