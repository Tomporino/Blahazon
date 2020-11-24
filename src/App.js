import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Grid from '@material-ui/core/Grid';
import Card from './components/Cards/Card';

function App() {
  return (
    <div><Navbar/>
    <div >
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        fixed="true"
        >
          <Card></Card>
        </Grid>
    </div>
    </div>
  );
}

export default App;
