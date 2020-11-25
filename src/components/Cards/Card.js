import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';
import Image from 'material-ui-image';
import testImage from '../../resources/Tshirts/whiteTshirt.png'

const useStyles = makeStyles((theme) => ({
    container: {
        background: "blue"
    },
    lorem: {
        padding: '50px'
    },
    image: {
        padding: '10px'
    }
}));


function Card() {
    const classes = useStyles();
    return (
        <div className={classes.lorem}>
        
        <Grid container className={classes.container}
            justify="space-evely"
            alignItems="center"
            spacing={3}>

            <Grid item container xs={6} 
                justify="center" 
                spacing={3}>

                <Grid item xs={6}>
                    <Typography variant="p">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </Typography>
                </Grid>

            </Grid>
            <Grid item xs={6}>
                <Image
                    src={testImage}
                    aspectRatio={(4/3)}
                    />
            </Grid>
        </Grid> 
        </div>
    );
}


export default Card;