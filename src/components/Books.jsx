import React from "react";
import BookCard from "./Bookcard";
import lolita from "../assets/books/lolita.jpg"
import existentialism from "../assets/books/existentialism.jpg"
import lover from "../assets/books/lover.jpg"
import one from "../assets/films/one.jpg"
import two from "../assets/films/two.jpg"
import three from "../assets/films/three.jpg"

const Books = () => {
  return (
    <div className="min-h-screen container mx-auto p-10 font-garamond">
      <section className="px-10 pt-10 pb-10 bg-old-book-page">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4 hover:scale-110 duration-700 playwrite-cu-main">
            Books & Films
          </h2>
          <hr className="w-full border-t border-gray-400 mb-6" />
          <p className="pt-5 text-lg hover:scale-110 duration-700">
            Literature and films are the all-time love of my life. Feel free to
            let me know what books and films you like!
          </p>
        </div>
      </section>

      <div className="flex space-x-4">
        <div className="w-1/2 bg-old-book-page p-6 rounded-lg">
          <h2 className="text-3xl font-semibold mb-6 hover:scale-110 duration-700">Currently Reading</h2>
          <ul className="space-y-10">
            <li className="notebook-paper bg-white p-6 rounded-lg shadow-lg">
              <BookCard
                imageSrc={lolita}
                author="Nabokov"
                bookName="Lolita"
                link = "https://en.wikipedia.org/wiki/Lolita"
              />
            </li>
            <li className="notebook-paper bg-white p-6 rounded-lg shadow-lg">
            <BookCard
                imageSrc={existentialism}
                author="Kaufmann"
                bookName="Existentialism from Dostoevsky to Satre"
                link = "https://www.amazon.com/Existentialism-Dostoevsky-Sartre-Revised-Expanded/dp/0452009308"
              />
            </li>
            <li className="notebook-paper bg-white p-6 rounded-lg shadow-lg">
              <BookCard
                imageSrc={lover}
                author="Marguerite Duras"
                bookName="The Lover"
                link = "https://www.amazon.com/Lover-Marguerite-Duras/dp/0375700528"
              />
            </li>
          </ul>
        </div>

        <div className="w-1/2 bg-old-book-page p-6 rounded-lg">
          <h2 className="text-3xl font-semibold mb-6 hover:scale-110 duration-700">Next to watch</h2>
          <ul className="space-y-10">
            <li className="notebook-paper bg-white p-6 rounded-lg shadow-lg">
              <BookCard
                imageSrc= {one}
                author="Edward Yang"
                bookName="A Confucian Confusion"
                link = "https://www.imdb.com/title/tt0109685/"
              />
            </li>
            <li className="notebook-paper bg-white p-6 rounded-lg shadow-lg">
              <BookCard
                imageSrc={two}
                author="Greta Gerwig/Noah Baumbach"
                bookName="Frances Ha"
                link = "https://www.imdb.com/title/tt2347569/"
              />
            </li>
            <li className="notebook-paper bg-white p-6 rounded-lg shadow-lg">
              <BookCard
                imageSrc={three}
                author="Andrey Zvyagintsev"
                bookName= "Leviathan"
                link =  "https://www.imdb.com/title/tt2802154/"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Books;
