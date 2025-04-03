// src/App.jsx
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import News from './components/News/News';
import './App.css';

// Import your images
import slide1 from './assets/images/slide1.jpg'; // Update with rural landscape image
import slide2 from './assets/images/slide2.jpg'; // Update with farming community image
import slide3 from './assets/images/slide3.jpg'; // Update with village development image

function App() {
  const heroSlides = [
    {
      image: slide1,
      title: 'Empowering Rural Communities',
      description: 'Supporting sustainable development and improving quality of life in rural areas.',
      button: 'Our Mission'
    },
    {
      image: slide2,
      title: 'Agricultural Innovation',
      description: 'Enhancing farming practices through education, technology, and sustainable methods.',
      button: 'Learn More'
    },
    {
      image: slide3,
      title: 'Building Infrastructure',
      description: 'Developing roads, water systems, and essential facilities for vibrant rural communities.',
      button: 'View Projects'
    }
  ];

  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero slides={heroSlides} />
                <Programs />
              </>
            } />
            <Route path="/news/*" element={<News />} />
          </Routes>
        </main>
        <footer className="footer">
          © {new Date().getFullYear()} Rural Development Initiative. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;