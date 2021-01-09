import React from 'react';
import cls from './Product.module.css';

import cart2 from '../../../assets/images/cart2.svg';
import { Link } from 'react-router-dom';


const Product = ({ id, imge, name, desc, price }) => {
    return (
        <div className = { cls.product }>
            <div className = { cls.product__inner }>
                <Link to = {'/product/1'}>
                    <img src = { imge } alt = "Product photos" className = {cls.product__image}/>
                    <div className = {cls.product__name}> { name } </div>
                    <div className = {cls.product__desc}> { desc } </div>
                    <div className = {cls.product__price}> { price } KZT</div>
                </Link>
                <div className = {cls.product__add}>
                    <img src = { cart2 } alt = "Cart"/>
                </div>
            </div>
        </div>
    )
}

export default Product;