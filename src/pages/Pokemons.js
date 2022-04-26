import React, { useState } from "react";
import Container from "../layout/Container";
import pokeApiExample from "../json/pokeApiExample.json";
import { PokemonCard } from "../components/PokemonCard";

const Pokemons = () => {
  const [listPokemon, setListPokemon] = useState(pokeApiExample);

  return (
    <Container>
      <section className="row align-center justify-content-center">
        {listPokemon.map((item, idex) => (
          <PokemonCard
            name={item.name}
            img={item.sprites.front_default}
            key={idex}
            abilities={item.abilities}
            otherClass="col-12 col-lg-2 col-md-4 my-4 mx-5 border border-black"
          />
        ))}
      </section>
    </Container>
  );
};

export default Pokemons;
