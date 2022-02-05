import React from "react";
import "../scss/components/product.scss";
const Product = (props) => {
  const { title, price, image, category, description } = props.data;
  return (
    <div className="Product">
      <h2>{title}</h2>
      <div>{price}</div>
      <img src={image} height="50px" />
      <div className="View-Details">View Details</div>
      <div className="Details">
        <span>{category}</span>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default Product;
