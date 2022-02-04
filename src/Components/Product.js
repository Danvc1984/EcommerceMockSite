import React from "react";

const Product = (props) => {
  const { title, price, image } = props.data;
  return (
    <div className="Product">
      <h2>{title}</h2>
      <div>{price}</div>
      <img src={image} height="50px" />
    </div>
  );
};

export default Product;
