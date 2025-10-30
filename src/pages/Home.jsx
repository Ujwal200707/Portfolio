import React from 'react';
import { Box } from '@mui/material';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Experience from '../sections/Experience';
import Achievements from '../sections/Achievements';
import Testimonials from '../sections/Testimonials';
import Blog from '../sections/Blog';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
