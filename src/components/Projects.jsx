import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectList = [
    {
      title: "ClassTranscribe",
      description:
        "Participated in the development of an educational platform proposed by professor Lawrence Angrave in University of Illinois Urbana Champaign. Worked on the user interface for transcript PDF download feature. Integrated a computer vision model into the platform for flash detection",
      tags: ["JavaScript", "TypeScript", "React", "C#", "Python", "RabbitMQ"],
      link: "https://classtranscribe.illinois.edu/",
    },
    {
      title: "MusicBox Interactive",
      description:
        "Worked as a full-stack developer intern in National Center for Atmospheric Research, mentored by Dr. Nicole Riemer. Participated in the development of MusicBox Interactive, which is an interactive software that leverages MusicBox and PartMC for atmospheric calculation and modelling",
      tags: ["Django", "RabbitMQ", "Docker", "JavaScript", "React", "SQLite"],
      link: "https://musicbox.acom.ucar.edu/",
    },
    {
      title: "I-Code",
      description:
        "Participated in the development of a mobile app proposed by Jacky Zhang. I-Code is a mobile app that allows user to practice coding and learn software development anytime, anywhere. It is designed to be Duolingo in the world of programmers.",
      tags: ["Node.js", "MongoDB", "JWT", "Flutter"],
    },
  ];

  return (
    <div className="min-h-screen container mx-auto p-10 font-garamond">
      <section className="px-10 pt-10 pb-10 bg-old-book-page">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4 hover:scale-110 duration-700 playwrite-cu-main">
            Projects & Experience Highlights
          </h2>
          <hr className="w-full border-t border-gray-400 mb-6" />
          <p className="pt-5 text-lg hover:scale-110 duration-700">
            Here are some fun projects I've worked on. I truly enjoy the sense
            of achievement that comes from building things and seeing them work.
            Many thanks to all the amazing people I've had the pleasure of
            collaborating with. Without them, these projects would not have been
            possible.
          </p>
        </div>
      </section>

      <div className="container mx-auto p-10">
        {projectList.map((project, index) => (
          <div key={index} className="mb-24">
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
