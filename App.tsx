import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Expertise } from './components/Expertise';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Mentorship } from './components/Mentorship';
import { Research } from './components/Research';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Projects />
        <Experience />
        <Mentorship />
        <Research />
      </main>
      <Footer />
    </div>
  );
}

export default App;