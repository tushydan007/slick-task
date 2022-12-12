import React from "react";
// import Card from "../card/Card";
import "./cartList.css";

const CartList = ({ movies }) => {
  return (
    <div className="card-container">
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-2">
          {/* {movies.map((movie) => (
          <Card key={movie.id} movie={movie.title} />
        ))} */}
        </div>
      </div>
    </div>
  );
};

export default CartList;
