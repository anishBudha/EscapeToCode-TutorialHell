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
    img: "https://images.unsplash.com/photo-1568520898629-d92b1be86c2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTEwNzk4MHwxfHNlYXJjaHw5fHxzaG9lc3xlbnwwfHx8fDE3MDYzMTE1MTF8MHwxfHwxMDAwMHx8fHxlbnwwfHx8&ixlib=rb-4.0.3&q=80&w=400",
    title: "backpack",
    oldPrice: 80,
    price: 70,
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1530258275325-66ee8c3c905f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTEwNzk4MHwxfHNlYXJjaHw2fHxzaG9lc3xlbnwwfHx8fDE3MDYzMTE1MTF8MHwxfHwxMDAwMHx8fHxlbnwwfHx8&ixlib=rb-4.0.3&q=80&w=400",
    title: "sunglasses",
    oldPrice: 120,
    price: 100,
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1601310242819-bcb80c3d8a8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTEwNzk4MHwxfHNlYXJjaHw5fHxzaG9lc3xlbnwwfHx8fDE3MDYzMTE1MTF8MHwxfHwxMDAwMHx8fHxlbnwwfHx8&ixlib=rb-4.0.3&q=80&w=400",
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
