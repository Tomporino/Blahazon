import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles'


const Dummy = makeStyles
`

function Card() {
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            fixed="true">
            <Dummy>
                Valami
            </Dummy>
            <Dummy>
                Kaka
            </Dummy>
        </Grid> 
    );
}


export default Card;