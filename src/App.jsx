import React, { useEffect, useRef } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Books from "./components/Books";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  const homeRef = useRef(null);
  const booksRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const sections = [
      { id: "home", ref: homeRef },
      { id: "books", ref: booksRef },
      { id: "projects", ref: projectsRef },
      { id: "contact", ref: contactRef },
    ];

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const link = document.querySelector(`a[href="#${entry.target.id}"]`);
        const listItem = link ? link.parentElement : null;
        console.log(
          `Section ${entry.target.id} is intersecting: ${entry.isIntersecting}`
        );
        console.log("ListItem selected:", listItem);

        if (entry.isIntersecting) {
          if (listItem) listItem.style.transform = "scale(1.4)";
          if (link) {
            link.style.color = "grey";
          }
        } else if (listItem) {
          if (listItem) listItem.style.transform = "scale(1)";
          if (link) {
            link.style.color = "white";
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
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="bg-old-book-page flex-1 overflow-y-auto">
        <section id="home" ref={homeRef} className="">
          <Home />
        </section>
        <section id="books" ref={booksRef} className="p-4">
          <Books />
        </section>
        <section id="projects" ref={projectsRef} className="p-4">
          <Projects />
        </section>
        <section id="contact" ref={contactRef} className="h-screen p-4">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default App;
