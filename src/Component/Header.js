import classes from './Header.module.css';
import React from 'react';
import CartIcon from './CartIcon';
import Cart from './Cart';
import { useState } from 'react';
const Header = (props) => {

    const [showCart, setShowCart] = useState(false)

    const showCartHandler = () => {
        setShowCart(!showCart);
        props.showProduct();
    }
    return (
        <>
                <div className={classes.header}>
                    <h1>Ecommerce</h1>
                    <button className={classes.headerButton} onClick={showCartHandler}>
                        <div>Your Cart</div>
                        <CartIcon></CartIcon>
                    </button>
                </div>
                {showCart && <Cart onClick={showCartHandler}></Cart>}
        </>
    )
};

export default Header;