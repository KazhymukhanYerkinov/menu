import React from 'react';
import { Link } from 'react-router-dom';

import minus from '../../../assets/images/minus.svg';
import plus from '../../../assets/images/plus.svg';

import cls from './Item.module.css';


const Item = ({ item, rootName, onHideCart, onRemoveProduct, onAddProduct }) => {

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
                    <img className = {cls.item__minus} src = { minus } alt = "" onClick = {() => onRemoveProduct(item[0], item[1]) }/>
                    <img className = {cls.item__plus} src = { plus } alt = "" onClick = {() => onAddProduct(item[0])}/>
                </div>
            </div>
        </div>
    )
}

export default Item;