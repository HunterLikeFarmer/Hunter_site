import React, { useEffect, useRef } from "react";
import IB2001 from "../assets/rolling/IB2001.jpg";
import mom from "../assets/rolling/mom.jpg";
import dad from "../assets/rolling/dad.jpg";
import la from "../assets/rolling/la.jpg";
import camus from "../assets/rolling/camus.jpg";
import site_sound from "../assets/rolling/site_sound.jpg";
import austin from "../assets/rolling/austin.jpg";
import houston from "../assets/rolling/houston.jpg";
import heralds1 from "../assets/rolling/heralds1.jpg";
import heralds2 from "../assets/rolling/heralds2.jpg";
import coffee from "../assets/rolling/me_with_coffee.jpg";
import ny from "../assets/rolling/New_York.jpg";
import nsda from "../assets/rolling/nsda.jpg";

const Contact = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    const ul = logosRef.current;
    if (ul) {
      ul.insertAdjacentHTML("afterend", ul.outerHTML);
      ul.nextSibling.setAttribute("aria-hidden", "true");
    }
  }, []);
  return (
    <div>
      <section className="px-10 pt-10 pb-10 bg-old-book-page">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold mb-4 hover:scale-110 duration-700 playwrite-cu-main">
            Contact
          </h2>
          <hr className="w-full border-t border-gray-400 mb-6" />
          <p className="pt-0 text-2xl hover:scale-110 duration-700">
            <a
              className="transform transition duration-300 hover:scale-110 inline-block text-blue-500 hover:text-sky-500 italic"
              href={`mailto:hunter789654@gmail.com`}
            >
              Feel free to start a conversation with me! This is my email!
            </a>
          </p>
        </div>
      </section>

      <div className="mt-auto bg-old-book-page p-6 pt-40">
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
              <li className="w-32 h-32 flex items-center justify-center">
                <img
                  src={austin}
                  alt="austin"
                  className="w-full h-full object-cover rounded-full"
                />
              </li>
              <li className="w-32 h-32 flex items-center justify-center">
                <img
                  src={houston}
                  alt="houston"
                  className="w-full h-full object-cover rounded-full"
                />
              </li>
              <li className="w-32 h-32 flex items-center justify-center">
                <img
                  src={heralds1}
                  alt="heralds1"
                  className="w-full h-full object-cover rounded-full"
                />
              </li>
              <li className="w-32 h-32 flex items-center justify-center">
                <img
                  src={heralds2}
                  alt="heralds2"
                  className="w-full h-full object-cover rounded-full"
                />
              </li>
              <li className="w-32 h-32 flex items-center justify-center">
                <img
                  src={ny}
                  alt="ny"
                  className="w-full h-full object-cover rounded-full"
                />
              </li>
              <li className="w-32 h-32 flex items-center justify-center">
                <img
                  src={nsda}
                  alt="nsda"
                  className="w-full h-full object-cover rounded-full"
                />
              </li>
              <li className="w-32 h-32 flex items-center justify-center">
                <img
                  src={coffee}
                  alt="coffee"
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

export default Contact;
