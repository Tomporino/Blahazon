import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ProductGrid from './components/Grids/ProductGrid';
import testImage from './resources/Tshirts/blahamodel.png'
import './App.css'

const products = [
  {id:"1", imgsrc:`${testImage}`, name:"testkep", description:"leiras"},
  {id:"2", imgsrc:"kep.jpg", name:"testkep2", description:"leiras2"},
  {id:"2", imgsrc:"kep.jpg", name:"testkep2 ez egy szöveg ami valahogy kinéz", description:"leiras2 es ez is kinez valahogy lol de jo lesz"},
  {id:"2", imgsrc:"kep.jpg", name:"testkep2", description:"leiras2"},
  {id:"2", imgsrc:"kep.jpg", name:"testkep2", description:"leiras2"},
  {id:"2", imgsrc:"kep.jpg", name:"testkep2", description:"leiras2"},
  {id:"2", imgsrc:"kep.jpg", name:"testkep2", description:"leiras2"},
  {id:"2", imgsrc:"kep.jpg", name:"testkep2", description:"leiras2"},
  {id:"2", imgsrc:"kep.jpg", name:"testkep2", description:"leiras2"},
  {id:"2", imgsrc:"kep.jpg", name:"testkep2", description:"leiras2"},
  {id:"2", imgsrc:"kep.jpg", name:"testkep2", description:"leiras2"}
]


function App() {
  return (
    <div >
      <Navbar/>
      <p>Ez egy webshop lesz</p>
      <ProductGrid products={products}/>
    </div>
  );
}

export default App;
