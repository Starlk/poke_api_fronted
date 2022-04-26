import React from "react";
import { Modal } from "./Modal";

export const PokemonCard = ({
  img,
  name,
  otherClass,
  isNotFavorito,
  handleClick,
}) => {
  return (
    <article className={`card ${otherClass} rounded shadow p-3 mb-5 bg-body`}>
      <img src={img} alt={name} className="card-img-top" />
      <div className="card-body">
        <h1 className="card-title text-center fs-5">{name}</h1>
        <div className={isNotFavorito ? "container-fluid" : "null"}>
          <button
            type="button"
            className="btn btn-outline-primary mb-2 center-block"
            data-bs-toggle="modal"
            data-bs-target={`#${name}`}
          >
            Detalle
          </button>

          {isNotFavorito ? (
            <button className="btn btn-outline-success">
              Agregar favorito
            </button>
          ) : null}
        </div>
      </div>
    </article>
  );
};
