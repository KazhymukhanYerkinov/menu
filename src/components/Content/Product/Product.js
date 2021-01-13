import React from 'react';
import cls from './Product.module.css';

import cart2 from '../../../assets/images/cart2.svg';
import { Link } from 'react-router-dom';


const Product = ({ id,name, foods, rootName, onAddProduct, rootTable, BASE_URL }) => {
    return (
        <>  
            <section className={cls.title} id = {`section_${id}`}> {foods.length !== 0 && name} </section>
            {
                foods.map((item, index) => {
                    return (
                        <div className={cls.product} key = { index }>
                            <div className={cls.product__inner}>
                                <Link to={`/${rootName}/${rootTable}/product/${item.id}`}>
                                    <img src={ `${BASE_URL}${item.image}` } alt="Product photos" className={cls.product__image} />
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
        </>
    )
}

export default Product;