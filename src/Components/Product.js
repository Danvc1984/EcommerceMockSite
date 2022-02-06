import React from "react";
import "../scss/components/product.scss";
const Product = (props) => {
  const { title, price, image, category, description } = props.data;
  return (
    <div className="Product">
      <h2>{title}</h2>
      <div className="Price">${price}</div>
      <div>
        <img src={image} />
      </div>
      <div className="View-Details">
        View Details
        <div className="Details">
          <span className="Category">{category}</span>
          <span className="Description">{description}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
