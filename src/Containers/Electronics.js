import React, { useEffect, useState } from "react";
import Product from "../Components/Product";
import Pagination from "./Pagination";
const Electronics = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
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
            title="Electronics"
            pageLimit={2}
            dataLimit={4}
          />
        </>
      ) : (
        <h1>No Electronics to display</h1>
      )}
    </div>
  );
};

export default Electronics;
