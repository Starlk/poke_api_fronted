import React from "react";
import pokebola from "../assets/pokebola.png";

const Header = ({ icon, children }) => {
  return (
    <>
      <header className="navbar navbar-expand-lg navbar-light bg-primary text-white">
        <h1 className="mx-5 navbar-brand fw-bold text-white">Pokedex</h1>

        <nav className="" id="navbarNav">
          <ul className="navbar-nav">{children}</ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
