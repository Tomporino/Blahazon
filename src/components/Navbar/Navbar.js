import React from 'react';
import Appbar from '@material-ui/core/Appbar';
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
        <h1 className={classes.title}>Blahazon</h1>
    </Appbar>
    );
}


export default Navbar;