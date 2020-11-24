import React from 'react';
import { Grid } from '@material-ui/core';
import Card from './components/Cards/Cards.js';

function ProductGrid() {
    return (
        <Grid container >
            <Grid item xs={12} sm={6}>
                <Card/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Card/>
            </Grid>
            <Grid xs={12} sm={6}>
                <Card/>
            </Grid>
        </Grid>
            
        
    )
}

export default ProductGrid
