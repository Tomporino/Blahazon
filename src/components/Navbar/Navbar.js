import React from 'react';
import Appbar from '@material-ui/core/Appbar';
import {makeStyles} from '@material-ui/core/styles';
import navImage from '../../resources/buttons/navbar.png';


const useStyles = makeStyles((theme) => ({
    title: {
        margin: theme.spacing(2)
    },

    Navbar:{
        backgroundImage: `url(${navImage})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(200, 0, 0, 0)',
        boxShadow: 'none',
        color: 'yellow'
    }
}));

function Navbar() {
    const classes = useStyles();
    return (
    <Appbar position="static" className={classes.Navbar}>
        <h1 className={classes.title}>Blahazon</h1>
    </Appbar>
    );
}


export default Navbar;