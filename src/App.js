import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Grid from '@material-ui/core/Grid';
import Card from './components/Cards/Card';
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <div>
        <Grid>
          <Card></Card>
          <Card reverse={true}></Card>
        </Grid>
      </div>
    </div>
  );
}

export default App;
