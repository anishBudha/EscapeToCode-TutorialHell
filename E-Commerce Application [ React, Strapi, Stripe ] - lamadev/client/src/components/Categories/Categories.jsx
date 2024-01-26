import React from "react";
// react router dom link element
import { Link } from "react-router-dom";

//scss file
import "./Categories.scss";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.unsplash.com/photo-1588189408846-30ad110a0f4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTA3OTh8MHwxfHNlYXJjaHwyfHxjbG90aGluZyUyMGJyYW5kfGVufDB8fHx8MTcwNjMwMzgwMnww&ixlib=rb-4.0.3&q=80&w=400"
            alt="a girl"
          />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://images.unsplash.com/photo-1588189408846-30ad110a0f4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTA3OTh8MHwxfHNlYXJjaHwyfHxjbG90aGluZyUyMGJyYW5kfGVufDB8fHx8MTcwNjMwMzgwMnww&ixlib=rb-4.0.3&q=80&w=400"
            alt="a girl"
          />
          <button>
            <Link className="link" to="/products/1">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://images.unsplash.com/photo-1588189408846-30ad110a0f4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTA3OTh8MHwxfHNlYXJjaHwyfHxjbG90aGluZyUyMGJyYW5kfGVufDB8fHx8MTcwNjMwMzgwMnww&ixlib=rb-4.0.3&q=80&w=400"
            alt="a girl"
          />
          <button>
            <Link className="link" to="/products/1">
              New Season
            </Link>
          </button>
        </div>
      </div>
      {/* since picture on the bottom of this column will be wider than others, this row will be larger. Hence, col-l. */}
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://images.unsplash.com/photo-1588189408846-30ad110a0f4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTA3OTh8MHwxfHNlYXJjaHwyfHxjbG90aGluZyUyMGJyYW5kfGVufDB8fHx8MTcwNjMwMzgwMnww&ixlib=rb-4.0.3&q=80&w=400"
                alt="a girl"
              />
              <button>
                <Link className="link" to="/products/1">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://images.unsplash.com/photo-1588189408846-30ad110a0f4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTA3OTh8MHwxfHNlYXJjaHwyfHxjbG90aGluZyUyMGJyYW5kfGVufDB8fHx8MTcwNjMwMzgwMnww&ixlib=rb-4.0.3&q=80&w=400"
                alt="a girl"
              />
              <button>
                <Link className="link" to="/products/1">
                  Men
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://images.unsplash.com/photo-1588189408846-30ad110a0f4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTA3OTh8MHwxfHNlYXJjaHwyfHxjbG90aGluZyUyMGJyYW5kfGVufDB8fHx8MTcwNjMwMzgwMnww&ixlib=rb-4.0.3&q=80&w=400"
            alt="a girl"
          />
          <button>
            <Link className="link" to="/products/1">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
