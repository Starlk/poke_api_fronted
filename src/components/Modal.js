import React from "react";

export const Modal = ({
  name,
  handleClick,
  children,
  activate,
  isFavorite,
}) => {
  return (
    <div
      className="modal fade"
      id={name}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title  text-center" id="exampleModalLabel">
              {name.toUpperCase()}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            {activate && (
              <p className={`text-success`}>EL pokemon fue guardado</p>
            )}
            {!isFavorite && (
              <button
                type="button"
                className={`btn btn-outline-success`}
                onClick={handleClick}
              >
                save pokemon
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
