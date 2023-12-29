import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./pages/Layout/Layout";
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Education from './pages/Education/Education';
import Projects from './pages/Projects/Projects';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
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
          {/*<Route path="/projects" element={<Projects />} />*/}
          <Route path="*" element={<NotFoundPage />} />
          {/* Add other routes here */}
        </Routes>
    </Layout>
  </Router>
  );
}

export default App;
