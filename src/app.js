import React from "react";
import Navbar from "./Components/Navbar";
import ProductList from "./Containers/ProductList";
import "./scss/app.scss";
const App = () => {
  return (
    <div>
      <Navbar />
      <h1>Light Grenades!</h1>
      <h3>All your Incubus merch right in one place</h3>
      <ProductList />
    </div>
  );
};

export default App;
