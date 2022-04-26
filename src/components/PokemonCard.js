import React from "react";

export const PokemonCard = ({ img, name, otherClass, isNotFavorito }) => {
  return (
    <article className={`card ${otherClass} rounded shadow p-3 mb-5 bg-body`}>
      <img src={img} alt={name} className="card-img-top" />
      <div className="card-body">
        <h1 className="card-title text-center fs-4">{name}</h1>
        <div className={isNotFavorito ? "container-fluid" : "null"}>
          <button className="btn btn-outline-primary mb-2 center-block">
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
