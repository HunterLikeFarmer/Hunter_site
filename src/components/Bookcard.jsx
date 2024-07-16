import React from 'react';

const BookCard = ({ imageSrc, author, bookName, link }) => {
  return (
    <div className="flex items-center space-x-6 p-4 transform transition duration-300 hover:scale-110">
      <img src={imageSrc} alt={bookName} className="w-40 h-60 object-cover rounded-lg" />
      <div className="ml-4">
        <a href={link} className="text-xl px-10 font-bold transform transition duration-300 hover:scale-110 inline-block">{bookName}</a>
        <h2 className="text-md px-10 pt-4 text-gray-700 transform transition duration-700 hover:scale-110 inline-block">{author}</h2>
      </div>
    </div>
  );
};

export default BookCard;
