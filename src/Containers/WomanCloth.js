import React, { useEffect, useState } from "react";
import Product from "../Components/Product";
import Pagination from "./Pagination";
const WomenCloth = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's clothing")
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
            title="Women's Clothing"
            pageLimit={2}
            dataLimit={4}
          />
        </>
      ) : (
        <h1>No Women's clothing to display</h1>
      )}
    </div>
  );
};

export default WomenCloth;
