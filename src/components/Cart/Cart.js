import React from 'react';
import { Link } from 'react-router-dom';


import close from '../../assets/images/close.svg'

import cls from './Cart.module.css';
import Item from './Item/Item';
import Delete from './Delete/Delete';


const Cart = ({ products, onHideCart, rootName,rootTable, sum, onRemoveProduct, onAddProduct, onDeleteLast }) => {
    const sale = 15;
    const obs = sum /100 * sale;
    const [ lastItem, setLastItem ] = React.useState(null);

    const onRemoveLast = (object) => {
        setLastItem(object);
    }
    
    
    return (
        <div className = {cls.cart}>
            <div className = {cls.cart__inner}>
               <img className = {cls.cart__close} src = { close } alt = "" onClick = { onHideCart } />
               {products.length > 0 && <div className = {cls.cart__title}> ЧЕК </div>}

               <div className = {cls.cart__content}>
                   {products.length > 0 ? 
                   <div className = {cls.cart__items}>
                        {products.map((item, index) => {
                            return (
                                <Item 
                                    key = {index} 
                                    item = { item } 
                                    rootName = { rootName } 
                                    onHideCart = { onHideCart }
                                    onRemoveProduct = { onRemoveProduct }
                                    onRemoveLast = { onRemoveLast }
                                    onAddProduct = { onAddProduct }
                                    />
                            )
                        })}
                    </div>: 
                    <div className = {cls.cart__image}>
                        <div className = {cls.empty__cart}> Корзина пустая  </div>
                        <div className = {cls.empty__text}> Для того, чтобы заказать еду, перейди на главную страницу. </div>
                    </div>
                    }
                    
                    <div className = {cls.cart__result}>
                        <div className = {cls.cart__subtotal}>
                            <div className = {cls.cart__row}>
                                <div className = {cls.cart__desc}> Промежуточный итог: </div>
                                <div className = {cls.cart__price}> { sum } KZT </div>
                            </div>
                            <div className = {cls.cart__row}>
                                <div className = {cls.cart__desc}> Oбслуживание: </div>
                                <div className = {cls.cart__price}> { obs } KZT </div>
                            </div>
                        </div>

                        <div className = {cls.cart__total}>
                            <div className = {cls.cart__row}>
                                <div className = {cls.cart__desc}> Всего: </div>
                                <div className = {cls.cart__price}> { sum + obs } KZT </div>
                            </div>
                        </div>

                        {products.length > 0 ? <Link to = {`/${rootName}/${rootTable}/order`} className = {cls.cart__button} onClick = { onHideCart }> Oтправить заказ </Link>:
                        <div className = {cls.cart__button} onClick = { onHideCart }> Вернуться назад </div>}
                    </div>
               </div>
            </div>
           {lastItem !== null && <Delete lastItem = { lastItem } setLastItem = { setLastItem } onDeleteLast = { onDeleteLast }/>}
        </div>
    )
}

export default Cart;