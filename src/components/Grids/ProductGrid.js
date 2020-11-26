import React from 'react';
import { Grid } from '@material-ui/core';
import ProductCard from '../Cards/ProductCard';
import testImage from '../../resources/Tshirts/blahamodel.png';


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
