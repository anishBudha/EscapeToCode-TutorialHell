import React from "react";
//scss
import "./List.scss";

// importing the card component
import Card from "../Card/Card";

const data = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTA3OTh8MHwxfHNlYXJjaHw0fHxzaG9lc3xlbnwwfHx8fDE3MDYzMTE1MTF8MA&ixlib=rb-4.0.3&q=80&w=400",
    title: "shoes",
    oldPrice: 100,
    price: 90,
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTA3OTh8MHwxfHNlYXJjaHwyfHxjbG90aGluZyUyMG1vZGVsc3xlbnwwfHx8fDE3MDY0MTEzODV8MA&ixlib=rb-4.0.3&q=80&w=400",
    title: "backpack",
    oldPrice: 80,
    price: 70,
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1645402596240-8970b0869d88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTA3OTh8MHwxfHNlYXJjaHwxN3x8Y2xvdGhpbmclMjBtb2RlbHN8ZW58MHx8fHwxNzA2NDExNDA5fDA&ixlib=rb-4.0.3&q=80&w=400",
    title: "sunglasses",
    oldPrice: 120,
    price: 100,
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1587231717522-18cf880299dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTA3OTh8MHwxfHNlYXJjaHwxOHx8Y2xvdGhpbmclMjBtb2RlbHN8ZW58MHx8fHwxNzA2NDExNDA5fDA&ixlib=rb-4.0.3&q=80&w=400",
    title: "watch",
    oldPrice: 180,
    price: 150,
  },
];

const List = () => {
  return (
    <div className="list">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
