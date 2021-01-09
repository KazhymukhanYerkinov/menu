import React from 'react';
import cls from './Header.module.css';

import cart from '../../assets/images/cart.svg';
import back from '../../assets/images/back.svg';
import Cart from '../Cart/Cart';
import { Link, Route } from 'react-router-dom';



const Header = () => {

    const [ showCart, setShowCart ] = React.useState(false);

    const onShowCart = () => {
        setShowCart(true);
    }
    const onHideCart = () => {
        setShowCart(false);
    }
    return (
        <div className = {cls.header}>
            <div className = 'container'>
                <div className = {cls.header__inner}>

                    <Route exact path = {'/'}>
                        <div className = {cls.header__back}></div>
                    </Route>

                    <Route exact path = {'/product/:productID'}>
                        <Link to = "/">
                            <div className = {cls.header__back}>
                                <img src = { back } alt = "back button"/>
                            </div>
                        </Link>
                    </Route>

                    <Route exact path = {'/order'}>
                        <Link to = "/">
                            <div className = {cls.header__back}>
                                <img src = { back } alt = "back button"/>
                            </div>
                        </Link>
                    </Route>


                    <div className = {cls.header__name}>
                        Rich Villa
                    </div>
                    <div className = {cls.header__cart} onClick = { onShowCart }>
                        
                        <img src = { cart } alt = "cart button"/>
                        <div className = {cls.cart__count}>
                            <div> 0 </div>
                        </div>

                    </div>
                </div>
            </div>
            {showCart && <Cart onHideCart = { onHideCart }/>}
        </div>
    )
}

export default Header;