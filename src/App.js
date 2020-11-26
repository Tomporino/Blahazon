import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {Product} from './components/Product';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {ProductList} from './components/ProductList';
import ProductGrid from './components/Grids/ProductGrid';
import './App.css'




function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/products" exact component={ProductGrid} />
          <Route path="/product/:id" component={Product} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
