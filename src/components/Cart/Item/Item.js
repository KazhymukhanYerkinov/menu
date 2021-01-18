import React from 'react';
import { Link } from 'react-router-dom';

import cls from './Item.module.css';


const Item = ({ item, rootName, onHideCart, onRemoveProduct, onAddProduct,onRemoveLast }) => {
    
    const onRemove = () => {
        if (item[1] === 1) {
            onRemoveLast(item[0]);
        }
        else {
            onRemoveProduct(item[0], item[1]);
        }
    }

    return (
        <div className = {cls.item}>
            <div className = {cls.item__inner}>
                <Link to = {`${rootName}/product/${item[0].id}`} onClick = { onHideCart }>
                    <div className = {cls.item__info}>
                        <div className = {cls.item__name}> {item[0].name}  ( <span> {item[1]}X </span> ) </div>
                        <div className = {cls.item__price}> {item[0].is_discounted ? item[0].total_price : item[0].price} KZT </div>
                    </div>
                </Link>

                <div className = {cls.item__quantity}>
                    <div className = {cls.minus} onClick = { onRemove }>
                        <span className = 'span__minus cart__minus'></span>
                    </div>
                    <div className = {cls.plus} onClick = {() => onAddProduct(item[0])}>
                        <span className = 'span__plus'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Item;