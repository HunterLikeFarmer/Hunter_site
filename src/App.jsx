import React, { useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Scrollbar } from 'react-scrollbars-custom';

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const sections = [
      { id: 'home', ref: homeRef },
      { id: 'about', ref: aboutRef },
      { id: 'projects', ref: projectsRef },
      { id: 'contact', ref: contactRef },
    ];

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const link = document.querySelector(`a[href="#${entry.target.id}"]`);
        const listItem = link ? link.parentElement : null;
        console.log(`Section ${entry.target.id} is intersecting: ${entry.isIntersecting}`); // Debugging
        console.log('ListItem selected:', listItem); // Debugging

        if (entry.isIntersecting) {
          if (listItem) listItem.style.transform = 'scale(1.4)';
          if (link) {
            link.style.color = 'grey';
          } 
        } else if (listItem) {
          if (listItem) listItem.style.transform = 'scale(1)';
          if (link) {
            link.style.color = 'white';
          } 
        }
      });
    }, options);

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <Scrollbar
        style={{ width: '100%', height: '100vh' }}
        trackYProps={{ className: 'scrollbar-track' }}
        thumbYProps={{ className: 'scrollbar-thumb' }}
      >
      <div className="bg-old-book-page flex-1 overflow-y-scroll">
        <section id="home" ref={homeRef} className="h-screen">
          <Home />
        </section>
        <section id="about" ref={aboutRef} className="h-screen">
          <About />
        </section>
        <section id="projects" ref={projectsRef} className="h-screen">
          <Projects />
        </section>
        <section id="contact" ref={contactRef} className="h-screen">
          <Contact />
        </section>
      </div>
      </Scrollbar>
    </div>
  );
};

export default App;
