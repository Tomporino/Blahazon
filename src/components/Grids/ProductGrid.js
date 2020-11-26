import React from 'react';
import { Grid } from '@material-ui/core';
import ProductCard from '../Cards/ProductCard';
import {products} from '../TempImages';

function ProductGrid(props) {
    console.log(props);
    return (
        <div className="grid-container" style={gridContainerStyle}>
            <Grid 
            container 
            spacing={5}
            direction="row"
            justify="space-around"
            alignItems="center"> 
            {
                products.map(
                    (product)=> 
                    <Grid xs={4} item>
                            <ProductCard imageSource={product.imgsrc} name={product.name}
                             description={product.description} id={product.id}/>
                    </Grid>
                )
            }
            
            </Grid>
        </div>
    )
}       

const gridContainerStyle = {
    paddingTop: '10%',
    paddingLeft: '5%'
    
}

export default ProductGrid
