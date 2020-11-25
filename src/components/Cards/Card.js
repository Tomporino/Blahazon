import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';
import Image from 'material-ui-image';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(3),
    }
}));


function Card() {
    const classes = useStyles();
    return (
        
        <Grid container>
            <Grid item xs={6}>
                <Typography variant="h2">
                    Valami
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Image
                    src="http://loremflickr.com/300/200"
                />
            </Grid>
        </Grid> 
    );
}


export default Card;