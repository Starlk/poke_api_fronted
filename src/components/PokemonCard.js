import React from "react";
import { Modal } from "./Modal";

export const PokemonCard = ({
  img,
  name,
  otherClass,
  isFavorito,
  abilities,
  handleClick,
  activatedMessage,
}) => {
  return (
    <>
      <article className={`card ${otherClass} rounded shadow p-3 mb-5 bg-body`}>
        <img src={img} alt={name} className="card-img-top" />
        <div className="card-body">
          <h1 className="card-title text-center fs-5">{name}</h1>
          <div className={"container-fluid"}>
            <div className="row">
              <button
                type="button"
                className="btn btn-outline-primary mb-2 center-block"
                data-bs-toggle="modal"
                data-bs-target={`#${name}`}
              >
                Detalle
              </button>
              {isFavorito && (
                <button
                  type="button"
                  className={`btn btn-outline-danger text-center`}
                  onClick={handleClick}
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>
      </article>
      <Modal
        name={name}
        handleClick={handleClick}
        activate={activatedMessage}
        isFavorite={isFavorito}
      >
        <article className="card mb-3 border-0">
          <div className="row g-0">
            <div className="col-md-4 align-self-center">
              <img src={img} alt={name} className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item active">Detalles</li>
                  {abilities.map((i, index) => (
                    <li
                      key={index}
                      className="list-group-item list-group-item-action"
                    >
                      habilidad : {i.ability.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </article>
      </Modal>
    </>
  );
};
