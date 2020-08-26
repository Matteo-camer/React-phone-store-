import React from 'react';
import {Switch, Route} from "react-router-dom"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/navbar"
import ProductList from "./components/productList"
import Default from "./components/default"
import Cart from "./components/cart"
import Details from "./components/details"
import Modal from "./components/modal"

function App() {
  return (
   <React.Fragment>
    <Navbar />

     <Switch>
       <Route exact path="/" component={ProductList} />
       <Route path="/details" component={Details} />
       <Route path="/cart" component={Cart} />
       <Route component={Default} />
     </Switch>
    <Modal />
   </React.Fragment>
  );
}

export default App;
