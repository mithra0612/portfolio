import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-8 text-center text-gray-500 bg-black border-t border-gray-900 mt-auto">
      <p className="text-sm">
        © {new Date().getFullYear()} Madhumithra M. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
