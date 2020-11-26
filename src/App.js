import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {Product} from './components/Product';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {ProductList} from './components/ProductList';
//import ProductGrid from './components/Grids/ProductGrid';
//import testImage from './resources/Tshirts/blahamodel.png'
import './App.css'
import Customize from './components/Customization/Customize';

// const products = [
//   {id:"1", imgsrc:`${testImage}`, name:"testkep", description:"leiras"},
//   {id:"2", imgsrc:"kep.jpg", name:"testkep2", description:"leiras2"},
//   {id:"2", imgsrc:"kep.jpg", name:"testkep2 ez egy szöveg ami valahogy kinéz", description:"leiras2 es ez is kinez valahogy lol de jo lesz"},
//   {id:"2", imgsrc:"kep.jpg", name:"testkep2", description:"leiras2"},
//   {id:"2", imgsrc:"kep.jpg", name:"testkep2", description:"leiras2"},
//   {id:"2", imgsrc:"kep.jpg", name:"testkep2", description:"leiras2"},
//   {id:"2", imgsrc:"kep.jpg", name:"testkep2", description:"leiras2"},
//   {id:"2", imgsrc:"kep.jpg", name:"testkep2", description:"leiras2"},
//   {id:"2", imgsrc:"kep.jpg", name:"testkep2", description:"leiras2"},
//   {id:"2", imgsrc:"kep.jpg", name:"testkep2", description:"leiras2"},
//   {id:"2", imgsrc:"kep.jpg", name:"testkep2", description:"leiras2"}
// ]


function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/product/:id" component={Product} />
          <Route path="/customize" exact component={Customize} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
