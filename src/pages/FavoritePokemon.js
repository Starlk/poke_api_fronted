import React, { useState, useEffect } from "react";
import { getDates } from "../helper/dbSessionStorage";
import Container from "../layout/Container";
import { PokemonCard } from "../components/PokemonCard";

const FavoritePokemon = () => {
  const [listPokemom, setListPokemom] = useState([]);

  useEffect(() => {
    getDates().then((datos) => setListPokemom(datos));
  }, []);
  return (
    <Container>
      <section className="row align-center justify-content-center">
        {listPokemom.length === 0 ? (
          <h1>No hay pokemones</h1>
        ) : (
          listPokemom.map((item, idex) => (
            <PokemonCard
              name={item.name}
              img={item.img}
              key={idex}
              abilities={item.abilities}
              otherClass="col-12 col-lg-2 col-md-4 my-4 mx-5 border border-black"
            />
          ))
        )}
      </section>
    </Container>
  );
};

export default FavoritePokemon;
