import React, { useState, useEffect } from "react";
import Container from "../layout/Container";
import { PokemonCard } from "../components/PokemonCard";
import { setDates } from "../helper/dbSessionStorage";
import useHttpGet from "../hooks/useHttpGet";
import Snipper from "../components/Snipper";
import NoData from "../components/NoData";

const Pokemons = () => {
  const [listPokemon, setListPokemon] = useState([]);
  const { data, loading, setLink } = useHttpGet(
    "https://localhost:7088/api/Pokemn"
  );
  const [activatedMessage, setActivatedMessage] = useState(false);
  const handleSavePokemon = (name, img, abilities, types) => {
    setDates(name, { name, img, abilities });
    setActivatedMessage(true);
    setTimeout(() => setActivatedMessage(false), 2000);
  };

  useEffect(() => {
    if (!loading) {
      setListPokemon(data);
    }
  }, [loading]);

  return (
    <Container>
      <section className="row align-center justify-content-center">
        {loading ? (
          <Snipper />
        ) : listPokemon === null ? (
          <NoData text="no hay pokemones" />
        ) : (
          listPokemon.map((item, idex) => (
            <PokemonCard
              name={item.name}
              img={item.sprites.front_default}
              key={idex}
              abilities={item.abilities}
              types={item.types}
              otherClass="col-12 col-lg-2 col-md-4 my-4 mx-5 border border-black"
              handleClick={() =>
                handleSavePokemon(
                  item.name,
                  item.sprites.front_default,
                  item.abilities,
                  item.types
                )
              }
              activatedMessage={activatedMessage}
            />
          ))
        )}
      </section>
    </Container>
  );
};

export default Pokemons;
