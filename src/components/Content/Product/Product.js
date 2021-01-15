import React from 'react';
import cls from './Product.module.css';

import cart2 from '../../../assets/images/cart2.svg';
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
                                <Link to={`/${rootName}/${rootTable}/product/${item.id}`}>
                                    <img src={!item.image ? noimage:`${BASE_URL}${item.image}` } alt="Product photos" className={cls.product__image} />
                                    <div className={cls.product__name}> { item.name } </div>
                                    <div className={cls.product__price}> {item.price} KZT</div>
                                </Link>
                                <div className={cls.product__add} onClick = {() => onAddProduct(item) }>
                                    <img src={cart2} alt="Cart" />
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