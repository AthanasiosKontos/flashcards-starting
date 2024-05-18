import React from "react";
import { useSelector } from "react-redux";
import { selectCardById } from "./cardsSlice"; // Import the selector

export default function Card({ id }) {
  const card = useSelector((state) => selectCardById(state, id)); // Use the selector to get the card by ID

  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <div className="card">
      <div className="card-front">
        <p>{card.front}</p>
      </div>
      <div className="card-back">
        <p>{card.back}</p>
      </div>
    </div>
  );
}
