import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./pages/Layout/Layout";
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Education from './pages/Education/Education';
import Projects from './pages/Projects/Projects';

function App() {
  const [loaded, setLoaded] = useState(false);

  function preloadImagesFromDirectory(directory) {
      const images = directory.keys().map(directory);
      images.forEach((imageSrc) => {
        const img = new Image();
        img.src = imageSrc;
      });
  }

  useEffect(() => {
    // Dynamically load all images in 'assets/images' directory
    const imagesDirectory = require.context('./assets/images', false, /\.(png|jpe?g|svg)$/);
    preloadImagesFromDirectory(imagesDirectory);

    // Check if the page has been loaded before
    const pageLoadedBefore = localStorage.getItem('pageLoaded');
    if (pageLoadedBefore) {
      setLoaded(true);
    } else {
      localStorage.setItem('pageLoaded', 'true');
    }
  }, []);

  return (
    <Router>
    <Layout>
      <Routes>
          <Route path="/" element={<Home loaded={!loaded} />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          {/* Add other routes here */}
        </Routes>
    </Layout>
  </Router>
  );
}

export default App;
