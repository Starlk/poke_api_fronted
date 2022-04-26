import React from "react";

export const Modal = ({ name, children }) => {
  return (
    <div
      class="modal fade"
      id={name}
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title  text-center" id="exampleModalLabel">
              {name.toUpperCase()}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">{children}</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-success">
              Save favorite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
