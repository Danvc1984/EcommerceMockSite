import React, { useEffect, useState } from "react";
import Product from "../Components/Product";
import Pagination from "./Pagination";
const MenCloth = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {products.length > 0 ? (
        <>
          <Pagination
            data={products}
            RenderComponent={Product}
            title="Men's Clothing"
            pageLimit={1}
            dataLimit={4}
          />
        </>
      ) : (
        <h1>No Men's clothing to display</h1>
      )}
    </div>
  );
};

export default MenCloth;
