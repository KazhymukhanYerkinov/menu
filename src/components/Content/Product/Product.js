import React from 'react';
import cls from './Product.module.css';

import noimage from '../../../assets/images/no.png';

import { Link } from 'react-router-dom';


const Product = ({ foods, rootName, onAddProduct, rootTable, BASE_URL }) => {
    
    

    return (
        <div className = {cls.base__block}>  
            {
                foods.map((item, index) => {    
                    return (
                        <div className={cls.product} key = { index }>
                            <div className={cls.product__inner}>
                                <Link to={`/${rootName}/${rootTable}/product/${item.id}`} className = {cls.product__link}>
                                    <div className = {cls.image__block}>
                                        <img src={!item.image ? noimage:`${BASE_URL}${item.image}` } alt="Product photos" className={cls.product__image} />
                                    </div>
                                    <div>
                                        <div className={cls.product__name}> { item.name } </div>
                                        <div className={cls.product__price}> {item.is_discounted ? <span> {item.total_price} KZT  <span className = {cls.del__text}> { item.price } KZT</span></span>: <span> {item.price} KZT </span>} </div>
                                    </div>
                                </Link>
                                <div className={cls.product__add} onClick = {() => onAddProduct(item) }>

                                    <span className = 'span__plus'></span>
                                </div>
                            </div>
                        </div>
                        
                    )
                })
            }
        </div>
    )
}

export default  Product;