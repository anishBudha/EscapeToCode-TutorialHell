import React, { useState } from "react";
import "./Products.scss";

// react-router-dom
import { useParams } from "react-router-dom";

//importing the list component
import List from "../../components/List/List";

const Products = () => {
  const catid = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={1} />
            <label htmlFor="2">Shirts</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" value={1} />
            <label htmlFor="3">Pants</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id="asc" value="asc" name="price" />
            <label htmlFor="asc">Lowest to Highest</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="desc" value="desc" name="price" />
            <label htmlFor="desc">Highest to Lowest</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          src="https://images.unsplash.com/photo-1542327534-59a1fe8daf73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTA3OTh8MHwxfHNlYXJjaHwxMHx8Y2xvdGhpbmclMjBicmFuZHxlbnwwfHx8fDE3MDYzMDM4MDJ8MA&ixlib=rb-4.0.3&q=80&w=400"
          alt=""
        />
        <List />
      </div>
    </div>
  );
};

export default Products;
