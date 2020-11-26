import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';
import Image from 'material-ui-image';
import imageOne from '../../resources/mainpage/first.png';
import imageTwo from '../../resources/mainpage/second.png';

const useStyles = makeStyles((theme) => ({
    container: {
        background: "lightgrey"
    },
    root: {
        paddingLeft: '60px',
        paddingRight: '60px',
        paddingTop: '50px',
        paddinBottom: '50px'
    }
}));


function Card(props) {
    let card;
    if (!props.reverse) {
        card = 
        <>
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
                        src={imageOne}
                        aspectRatio={(4/3)}
                        />
                </Grid>
        </>

    } else {
        card = 
        <>
            <Grid item xs={6}>
                <Image
                    src={imageTwo}
                    aspectRatio={(4/3)}
                    />
            </Grid>
        <Grid item container xs={6} 
                justify="center" 
                spacing={3}>
                    <Grid item xs={6}>
                        <Typography variant="p">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </Typography>
                    </Grid>
            </Grid>
        </>
    }

    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Grid container className={classes.container}
            justify="space-evely"
            alignItems="center"
            spacing={3}>
            
            {card}
            
        </Grid> 
        </div>
    );
}


export default Card;