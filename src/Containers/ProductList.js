import React, { useEffect, useState } from "react";
import Product from "../Components/Product";
import Pagination from "./Pagination";
const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err)); //TODO Display errors to user
  }, []);

  return (
    <div>
      {products.length > 0 ? (
        <>
          <Pagination
            data={products}
            RenderComponent={Product}
            title="All Products"
            pageLimit={5}
            dataLimit={4}
          />
        </>
      ) : (
        <h1>No Products to display</h1>
      )}
    </div>
  );
};

export default ProductList;
