import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {Product} from './components/Product'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {ProductList} from './components/ProductList';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/product/:id" component={Product} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
