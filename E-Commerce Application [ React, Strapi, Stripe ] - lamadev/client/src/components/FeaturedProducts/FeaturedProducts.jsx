import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1588099768531-a72d4a198538?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTA3OTh8MHwxfHNlYXJjaHw4fHxjbG90aGluZ3xlbnwwfHx8fDE3MDYyNDQ0OTh8MA&ixlib=rb-4.0.3&q=80&w=400",
      img2: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTA3OTh8MHwxfHNlYXJjaHwxfHxjbG90aGluZ3xlbnwwfHx8fDE3MDYyNDQ0OTh8MA&ixlib=rb-4.0.3&q=80&w=400",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1588099768531-a72d4a198538?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTA3OTh8MHwxfHNlYXJjaHw4fHxjbG90aGluZ3xlbnwwfHx8fDE3MDYyNDQ0OTh8MA&ixlib=rb-4.0.3&q=80&w=400",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1588099768531-a72d4a198538?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTA3OTh8MHwxfHNlYXJjaHw4fHxjbG90aGluZ3xlbnwwfHx8fDE3MDYyNDQ0OTh8MA&ixlib=rb-4.0.3&q=80&w=400",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1588099768531-a72d4a198538?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTA3OTh8MHwxfHNlYXJjaHw4fHxjbG90aGluZ3xlbnwwfHx8fDE3MDYyNDQ0OTh8MA&ixlib=rb-4.0.3&q=80&w=400",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro a quam
          illo dolorum veniam quisquam? Illo sint blanditiis beatae atque at,
          reiciendis nostrum asperiores rem nihil, cum eius mollitia sapiente?
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
