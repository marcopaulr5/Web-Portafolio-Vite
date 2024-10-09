import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Marco.dev. All rights reserved.
        </p>
        <p className="text-gray-500 mt-2">
          Designed and built with ❤️ by Marco Paul Quispe
        </p>
      </div>
    </footer>
  );
};

export default Footer;