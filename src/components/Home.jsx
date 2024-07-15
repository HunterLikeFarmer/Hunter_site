import React, { useEffect, useRef } from "react";
import IB2001 from "../assets/IB2001.jpg";
import mom from "../assets/mom.jpg";
import dad from "../assets/dad.jpg";
import la from "../assets/la.jpg";
import camus from "../assets/camus.jpg"
import site_sound from "../assets/site_sound.jpg";

const Home = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    const ul = logosRef.current;
    if (ul) {
      ul.insertAdjacentHTML("afterend", ul.outerHTML);
      ul.nextSibling.setAttribute("aria-hidden", "true");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-garamond">
      <div
        className="relative h-80 bg-cover "
        style={{ backgroundImage: `url(${camus})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl text-white font-bold">
            Welcome to My Homepage
          </h1>
        </div>
        <div className="absolute inset-0">
          <div className="h-full w-full bg-gradient-to-b from-transparent to-old-book-page"></div>
        </div>
      </div>

      <section className="pt-10 pb-10 bg-old-book-page">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold mb-4">My name is Hunter</h2>
          <p className="text-lg">
            I'm an undergraduate at the University of Illinois Urbana-Champaign.
            I currently major in computer science and minor in comparative
            literature.
          </p>
        </div>
      </section>

      <div className="mt-auto bg-old-book-page p-6">
        <div className="container mx-auto">
          <div
            className="w-full inline-flex flex-nowrap overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)",
            }}
          >
            <ul
              ref={logosRef}
              className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            >
              <li className="w-32 h-32 flex items-center justify-center">
                <img
                  src={mom}
                  alt="Mom"
                  className="w-full h-full object-cover rounded-full"
                />
              </li>
              <li className="w-32 h-32 flex items-center justify-center">
                <img
                  src={dad}
                  alt="Dad"
                  className="w-full h-full object-cover rounded-full"
                />
              </li>
              <li className="w-32 h-32 flex items-center justify-center">
                <img
                  src={IB2001}
                  alt="IB"
                  className="w-full h-full object-cover rounded-full"
                />
              </li>
              <li className="w-32 h-32 flex items-center justify-center">
                <img
                  src={la}
                  alt="LA"
                  className="w-full h-full object-cover rounded-full"
                />
              </li>
              <li className="w-32 h-32 flex items-center justify-center">
                <img
                  src={site_sound}
                  alt="Site Sound"
                  className="w-full h-full object-cover rounded-full"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
