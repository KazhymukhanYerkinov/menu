import React from 'react';
import { Link } from 'react-router-dom';

import close from '../../assets/images/close.svg'

import cls from './Cart.module.css';
import Item from './Item/Item';

const list = ['1', '2', '3', '4', '5','1', '2', '3', '4', '5','1', '2', '3', '4', '5'];

const Cart = ({ onHideCart }) => {
    return (
        <div className = {cls.cart}>
            <div className = {cls.cart__inner}>
               <img className = {cls.cart__close} src = { close } alt = "" onClick = { onHideCart } />
               <div className = {cls.cart__title}> ЧЕК </div>

               <div className = {cls.cart__content}>
                   <div className = {cls.cart__items}>
                        { list.map((item, index) => {
                            return (
                                <Item key = {index}/>
                            )
                        }) }
                    </div>

                    <div className = {cls.cart__result}>
                        <div className = {cls.cart__subtotal}>
                            <div className = {cls.cart__row}>
                                <div className = {cls.cart__desc}> Промежуточный итог: </div>
                                <div className = {cls.cart__price}> 11200 KZT </div>
                            </div>
                            <div className = {cls.cart__row}>
                                <div className = {cls.cart__desc}> Oбслуживание: </div>
                                <div className = {cls.cart__price}> 778 KZT </div>
                            </div>
                        </div>

                        <div className = {cls.cart__total}>
                            <div className = {cls.cart__row}>
                                <div className = {cls.cart__desc}> Всего: </div>
                                <div className = {cls.cart__price}> 11978 KZT </div>
                            </div>
                        </div>

                        <Link to = {'/order'} className = {cls.cart__button} onClick = { onHideCart }> Oтправить заказ </Link>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default Cart;