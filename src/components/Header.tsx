import React from "react";

interface HeaderProps {
  categories: string[];
  logoSrc: string;
}

const Header: React.FC<HeaderProps> = ({ categories, logoSrc }) => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <img src={logoSrc} alt="Logo" className="w-24 h-auto" />{" "}
      <nav className="flex">
        {categories.map((category, index) => (
          <div
            key={index}
            className="px-4 py-2 cursor-pointer transition duration-300 hover:bg-gray-600"
          >
            {category}
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Header;
