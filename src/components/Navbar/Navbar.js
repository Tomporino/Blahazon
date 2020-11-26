import React from 'react';
import Appbar from '@material-ui/core/Appbar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import navImage from '../../resources/buttons/navbar.png';
import homeBtnImg from '../../resources/buttons/home.png';
import homeBtnImg_ho from '../../resources/buttons/home_ho.png';
import productsBtnImg from '../../resources/buttons/products.png';
import productsBtnImg_ho from '../../resources/buttons/products_ho.png';


const useStyles = makeStyles((theme) => ({
    title: {
        margin: theme.spacing(2)
    },

    Navbar:{
        width: '100%',
        height: '80px',
        backgroundImage: `url(${navImage})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(200, 0, 0, 0)',
        boxShadow: 'none',
        color: 'yellow',
        alignItems: 'center'
        
    },

    buttonStyle: {
        width: '80px',
        height: '50px',
        backgroundSize: '100% 100%',
        float: 'right',
        marginRight: '40px',
        marginLeft: '10px',
        

    },

    title:{
        float:'left',
        marginLeft: '20px'
    },

    homeBtn: {
        backgroundImage: `url(${homeBtnImg})`,
        '&:hover':{
            transition: 'all 0.5s ease 0s',
            transform: 'translate(0px,5px)',
            backgroundImage: `url(${homeBtnImg_ho})`,
        }
    },

    productsBtn: {
        backgroundImage: `url(${productsBtnImg})`,
        '&:hover':{
            transition: 'all 0.5s ease 0s',
            transform: 'translate(0px,5px)',
            backgroundImage: `url(${productsBtnImg_ho})`,
        }
    }
}));

function Navbar() {
    const classes = useStyles();
    return (
        <div className={classes.Navbar}>
            <div className={classes.title}><h1>Blahazone</h1></div>
            <Link to="/" ><div className={`${classes.homeBtn} ${classes.buttonStyle}`}></div></Link>
            <Link to="/products" ><div className={`${classes.productsBtn} ${classes.buttonStyle}`}></div></Link>


        </div>
    // <Appbar position="static" className={classes.Navbar}>
    //     <Toolbar>
    //         <h1 className={classes.title}>Blahazon</h1>

        
    //     <Button className="productsBtn"></Button>
    //     </Toolbar>
    //     <Button className="homeBtn"></Button>
    // </Appbar>
    );
}



export default Navbar;