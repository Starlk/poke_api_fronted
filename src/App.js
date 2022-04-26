import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pokemons from "./pages/Pokemons";
import FavoritePokemon from "./pages/FavoritePokemon";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Pokemons />} />
            <Route path="favoritePokemon" element={<FavoritePokemon />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
