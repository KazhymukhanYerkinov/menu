import React from 'react';
import cls from './Header.module.css';

import cart from '../../assets/images/cart.svg';
import back from '../../assets/images/back.svg';
import Cart from '../Cart/Cart';
import { Link, Route } from 'react-router-dom';



const Header = ({ name, products, rootName, rootTable, sum, onRemoveProduct, onAddProduct }) => {
    const [showCart, setShowCart] = React.useState(false);

    const onShowCart = () => {
        setShowCart(true);
    }
    const onHideCart = () => {
        setShowCart(false);
    }
    return (
        <div className={cls.header}>
            <div className='container'>
                <div className={cls.header__inner}>

                    <Link to={`/${rootName}/${rootTable}`}>
                        <div className={cls.header__back}>
                            <img src={back} alt="back button" />
                        </div>
                    </Link>
                    
                    <Link to = {`/${rootName}/${rootTable}`}>
                        <div className={cls.header__name}>
                            {name}
                        </div>
                    </Link>
                    <div className={cls.header__cart} onClick={onShowCart}>

                        <img src={cart} alt="cart button" />
                        <div className={cls.cart__count}>
                            <div> {products.length ? products.length : 0} </div>
                        </div>

                    </div>
                </div>
            </div>
            {showCart && <Cart onHideCart={onHideCart} 
                               products = { products } rootName = { rootName } sum = { sum } rootTable = { rootTable }
                               onAddProduct = { onAddProduct } onRemoveProduct = { onRemoveProduct }/>}
        </div>
    )
}

export default Header;