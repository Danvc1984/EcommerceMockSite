import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=3")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const items = products.map((item) => (
    <div key={item.id}>
      <h2>{item.title}</h2>
      <div>{item.price}</div>
      <img src={item.image} height="50px" />
    </div>
  ));

  return <div>{items}</div>;
};

export default ProductList;
