import "./Header.css";
import React from "react";
import pokebola from "../assets/pokebola.png";

const Header = ({ icon, children }) => {
  return (
    <>
      <header className="header">
        {icon ? (
          { icon }
        ) : (
          <img
            src={pokebola}
            alt="icon"
            className="icon"
            onClick={() => console.log("tengo que ser siempre el mejor")}
          />
        )}
        <nav className="nav">
          <ul className="nav_item">{children}</ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
