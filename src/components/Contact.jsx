import React from 'react';

const Contact = () => {
  return (
    <div className="p-6">
      <h1 className="email-link text-2xl font-bold mb-4">Want a chat?</h1>
      <a
        className="transform transition duration-300 hover:scale-110 inline-block text-blue-500"
        href={`mailto:hunter789654@gmail.com`}
      >
        Get in touch with me!
      </a>
    </div>
  );
};

export default Contact;
