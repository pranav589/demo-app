import React from "react";
import "./styles.css";

function Card({ listsProp }) {
  return (
    <>
      {listsProp.map((list) => (
        <div className="card__content" key={list.id}>
          <h6>{list.title}</h6>
        </div>
      ))}
    </>
  );
}

export default Card;
