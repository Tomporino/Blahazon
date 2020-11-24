import React from 'react';
import Appbar from '@material-ui/core/Appbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    title: {
        margin: theme.spacing(2)
    }
}));

function Navbar() {
    const classes = useStyles();
    return (
    <Appbar position="static">
        <div >
        <Typography className={classes.title} variant="h6">Blahazon</Typography>
        </div>
    </Appbar>
    );
}


export default Navbar;