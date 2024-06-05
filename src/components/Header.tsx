import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import "./Header.css";

interface HeaderProps {
  categories: { name: string; link: string }[]; // Changed categories to include links
  logoSrc: string;
}

const Header: React.FC<HeaderProps> = ({ categories, logoSrc }) => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logoSrc} alt="Logo" />
      </Link>
      <nav>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <Link to={category.link}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
