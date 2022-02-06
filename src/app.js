import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ProductList from "./Containers/ProductList";
import Electronics from "./Containers/Electronics";
import Jewelry from "./Containers/Jewelry";
import MenCloth from "./Containers/MenCloth";
import WomanCloth from "./Containers/WomanCloth";
import NotFound from "./Components/NotFound";
import "./scss/app.scss";
const App = () => {
  let currentPage = (
    <Switch>
      <Route path="/electronics" component={Electronics} />
      <Route path="/jewelry" component={Jewelry} />
      <Route path="/menclothing" component={MenCloth} />
      <Route path="/womenclothing" component={WomanCloth} />
      <Route path="/" exact component={ProductList} />
      <Route component={NotFound} />
    </Switch>
  );

  return (
    <div>
      <Navbar />
      {currentPage}
    </div>
  );
};

export default App;
