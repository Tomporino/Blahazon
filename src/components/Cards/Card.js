import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles'


function Card() {
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            fixed="true">
            <p>
                Valami
            </p>
            <p>
                Kaka
            </p>
        </Grid> 
    );
}


export default Card;