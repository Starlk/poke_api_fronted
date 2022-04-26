import React from "react";
import snorlax from "../assets/snorlax-seeklogo.com.svg";

const NoData = ({ img, text }) => {
  return (
    <aside className="col-12  mt-3">
      <img alt="Nodatos" src={snorlax} className="d-block mx-auto"></img>
      <h1 className="text-center fw-bold text-uppercase">{text}</h1>
    </aside>
  );
};

export default NoData;
