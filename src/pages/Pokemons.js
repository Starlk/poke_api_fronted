import React, { useState } from "react";
import Container from "../layout/Container";
import pokeApiExample from "../json/pokeApiExample.json";
import { PokemonCard } from "../components/PokemonCard";
import { Modal } from "../components/Modal";
const Pokemons = () => {
  const [listPokemon, setListPokemon] = useState(pokeApiExample);

  return (
    <Container>
      <section className="row align-center justify-content-center">
        {listPokemon.map((item, idex) => (
          <>
            <PokemonCard
              name={item.name}
              img={item.sprites.front_default}
              key={idex}
              otherClass="col-12 col-lg-2 col-md-4 my-4 mx-5 border border-black"
            />
            <Modal name={item.name}>
              <article className="card mb-3 border-0">
                <div className="row g-0">
                  <div className="col-md-4 align-item-center">
                    <img
                      src={item.sprites.front_default}
                      alt={item.name}
                      className="img-fluid rounded-start"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <ul className="list-group">
                        {item.abilities.map((i, index) => (
                          <li
                            key={index}
                            className="list-group-item list-group-item-action"
                          >
                            habilidad : {i.ability.name}
                          </li>
                        ))}
                        \
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </Modal>
          </>
        ))}
      </section>
    </Container>
  );
};

export default Pokemons;
