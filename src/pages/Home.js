import React from "react";
import Header from "../layout/Header";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header>
        <li className="nav-item active">
          <Link to="/" className="nav-link text-white">
            Ver pokemones
          </Link>
        </li>
        <li className="nav-item active">
          <Link to="/favoritePokemon" className="nav-link text-white">
            Pokemons favoritos
          </Link>
        </li>
      </Header>
      <Outlet />
    </div>
  );
};

export default Home;
