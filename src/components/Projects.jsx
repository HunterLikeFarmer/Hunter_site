import React from 'react';
import BookCard from './Bookcard';

const Projects = () => {
  return (
    <div className="min-h-screen container mx-auto p-10 font-garamond">
      {/* Top section with title and paragraph */}
      <section className="px-10 pt-10 pb-10 bg-old-book-page">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4 hover:scale-110 duration-700">
            Books & Films
          </h2>
          <p className="pt-5 text-lg hover:scale-110 duration-700">
            Literature and films are the all-time love of my life. Feel free to
            let me know some books and films you like!.
          </p>
        </div>
      </section>

      {/* Bottom section with two parallel containers */}
      <div className="flex space-x-4">
        {/* Left container */}
        <div className="w-1/2 bg-old-book-page p-4 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Reading</h2>
          <ul className="space-y-2">
            <li className="bg-white p-2 rounded shadow">
              <BookCard
                imageSrc="https://via.placeholder.com/150"
                author="Author Name"
                bookName="Book Name"
              />
            </li>
            <li className="bg-white p-2 rounded shadow">
              <BookCard
                imageSrc="https://via.placeholder.com/150"
                author="Author Name"
                bookName="Book Name"
              />
            </li>
            <li className="bg-white p-2 rounded shadow">
              <BookCard
                imageSrc="https://via.placeholder.com/150"
                author="Author Name"
                bookName="Book Name"
              />
            </li>
          </ul>
        </div>

        <div className="w-1/2 bg-old-book-page p-4 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Next to watch</h2>
          <ul className="space-y-2">
            <li className="bg-white p-2 rounded shadow">
              <BookCard
                imageSrc="https://via.placeholder.com/150"
                author="Author Name"
                bookName="Book Name"
              />
            </li>
            <li className="bg-white p-2 rounded shadow">
              <BookCard
                imageSrc="https://via.placeholder.com/150"
                author="Author Name"
                bookName="Book Name"
              />
            </li>
            <li className="bg-white p-2 rounded shadow">
              <BookCard
                imageSrc="https://via.placeholder.com/150"
                author="Author Name"
                bookName="Book Name"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
