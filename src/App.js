import React from 'react';
import Navbar from './components/Navbar/Navbar';
import MainMenuGrid from './components/Grids/MainMenuGrid';

function App() {
  return (
    <div >
      <Navbar/>
      <p>Ez egy webshop lesz</p>
      <MainMenuGrid firstImageSource="valami.jpg" firstImageSource firstText="Ez az elso szöveg doboz szövege" secondText="Ez a második szövegdoboz szövege"/>
    </div>
  );
}

export default App;
