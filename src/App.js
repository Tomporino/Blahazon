import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Grid from '@material-ui/core/Grid';
import Card from './components/Cards/Card';
import {Product} from './components/Product'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <div>
          <Grid>
            <Card></Card>
            <Card reverse={true}></Card>
          </Grid>
        </div>
        <Route path="/product/:id" component={Product} />
      </div>
    </Router>
  );
}

export default App;
