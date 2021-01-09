import React from 'react';

import minus from '../../../assets/images/minus.svg';
import plus from '../../../assets/images/plus.svg';

import cls from './Item.module.css';


const Item = () => {
    return (
        <div className = {cls.item}>
            <div className = {cls.item__inner}>
                <div className = {cls.item__info}>
                    <div className = {cls.item__name}> Attribute Variation  ( <span> 2X </span> ) </div>
                    <div className = {cls.item__price}> 4600 KZT </div>
                </div>

                <div className = {cls.item__quantity}>
                    <img className = {cls.item__minus} src = { minus } alt = "" />
                    <img className = {cls.item__plus} src = { plus } alt = "" />
                </div>
            </div>
        </div>
    )
}

export default Item;