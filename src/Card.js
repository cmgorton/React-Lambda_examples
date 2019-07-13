import React from "react";
function pickFood() {
  const foods = [
    "Tacos 🌮",
    "Pizza 🍕",
    "Hamburgers 🍔",
    "Chinese 🥡",
    "Salad 🥗",
    " Sushi 🍣"
  ];
  return foods[Math.floor(Math.random() * foods.length)];
}
const Card = () => {
  return (
    <div className="card">
      <h1>
        We should eat: <span>{pickFood()}</span>
      </h1>
    </div>
  );
};

export default Card;
