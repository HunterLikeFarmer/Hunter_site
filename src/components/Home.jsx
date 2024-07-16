import React from "react";
import camus from "../assets/rolling/camus.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col font-garamond">
      <div
        className="relative h-80 bg-cover "
        style={{ backgroundImage: `url(${camus})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl text-white font-bold italic playwrite-cu-main">
            Welcome to My Homepage
          </h1>
        </div>
        <div className="absolute inset-0">
          <div className="h-full w-full bg-gradient-to-b from-transparent to-old-book-page"></div>
        </div>
      </div>

      <section className="px-10 pt-10 pb-10 bg-old-book-page">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold mb-4 hover:scale-110 duration-700">
            Hi! My name is Hunter Jiang
            
          </h2>
          <hr className="w-full border-t border-gray-400 mb-6" />
          <p className="pt-5 text-lg hover:scale-110 duration-700">
            I'm an undergraduate at{" "}
            <strong>
              <i className = "text-orange-400">University </i> 
              <i className = "text-blue-600"> of Illinois </i>
              <i className = "text-orange-400"> Urbana- </i>
              <i className = "text-blue-600"> Champaign</i>
            </strong>
            .
          </p>
          <p className="pt-5 text-lg hover:scale-110 duration-700">
            I currently major in{" "}
            <strong>
              <i>computer science</i>
            </strong>{" "}
            and minor in{" "}
            <strong>
              <i>comparative literature</i>
            </strong>
            .
          </p>
          <p className="pt-5 text-lg hover:scale-110 duration-700">
            In my free time, I enjoy reading, watching films, taking walks or just biking around.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
