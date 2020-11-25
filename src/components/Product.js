import React from 'react';
import image from '../resources/Tshirts/retard.png';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    productImage:{
        backgroundImage: `url(${image})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
    },

    productDetails:{
        height: '100%',
        fontWeight: '500'
    },

    container:{
        padding: '50px 20vw',
        display: 'grid',
        height: '45vw',
        gridTemplateColumns: '30vw auto',
        gap: '10px'
    },

    dropbtn:{
        position: 'relative',
        display: 'inline-block'
    },

    dropdownContent:{
        position: 'absolute',
        backgroundColor: '#f9f9f9',
        minWidth: '160px',
        boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
        zIndex: '1',
    },

    displayNone:{
        display: 'none',
    },

})

export const Product = ({match}) => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.container}>
                <div className={classes.productImage}>
                </div>
                <div className={classes.productDetails}>
                    <p>Emporio Armani Loungewear 2 pack logo lounge t-shirts in black</p>
                    <h2>49.99 EUR</h2>
                    <h3>colour:</h3>
                    <p>white</p>
                    <h3>size: </h3>
                    <p id='selectdedSize'>XL</p>
                    <div className={classes.dropdown}>
                        <button className={classes.dropbtn} onClick={ChooseSizeButtonClickHandler}>Choose size</button>
                        <div className={`${classes.dropdownContent} ${classes.displayNone}`}>
                            <button onClick={(event) => SelectButtonClickHandler(event)}>XS</button>
                            <button onClick={(event) => SelectButtonClickHandler(event)}>S</button>
                            <button onClick={(event) => SelectButtonClickHandler(event)}>M</button>
                            <button onClick={(event) => SelectButtonClickHandler(event)}>L</button>
                            <button onClick={(event) => SelectButtonClickHandler(event)}>XL</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    function ChooseSizeButtonClickHandler() {
        document.querySelector(`.${classes.dropdownContent}`).classList.remove(`${classes.displayNone}`);
    }

    function SelectButtonClickHandler(event) {
        document.querySelector("#selectdedSize").innerText = event.target.innerText;
        document.querySelector(`.${classes.dropdownContent}`).classList.add(`${classes.displayNone}`);
    }
}

