import React from "react";
import Header from "../layout/Header";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header>
        <li>
          <Link to="/">Ver pokemones</Link>
        </li>
        <li>
          <Link to="/favoritePokemon">Pokemons favoritos</Link>
        </li>
      </Header>
      <Outlet />
    </div>
  );
};

export default Home;
