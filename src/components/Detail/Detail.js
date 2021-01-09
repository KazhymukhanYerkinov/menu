import React from 'react';

import plate1 from '../../assets/images/plate1.png';
import minus from '../../assets/images/minus.svg';
import plus from '../../assets/images/plus.svg';



import cls from './Detail.module.css';


const Detail = () => {
    return (
        <div className = {cls.detail}>
            <div className = 'container'>
                <div className = {cls.detail__inner}>
                    <img src = { plate1 } alt = "" className = {cls.detail__image}/>
                    <div className = { cls.detail__name }> Attribute Variation </div>
                    <div className = { cls.detail__price }> 2300 KZT </div>
                    <div className = {cls.quantity}>
                        <div className = {cls.quantity__text}> Количество: </div>

                        <div className = {cls.quantity__input}>
                            <img className = {cls.quantity__minus} src = { minus } alt = ""/>
                            <div className = {cls.quantity__count}> 0 </div>
                            <img className = {cls.quantity__plus} src = { plus } alt = "" />
                        </div>
                    </div>

                    <div className = {cls.detail__button}>
                        добавить в корзину
                    </div>

                    <div className = {cls.detail__desc}>
                        <div className = {cls.desc__title}>
                        Описание
                        </div>

                        <div className = {cls.desc__text}>
                        The best is yet to come! Start the day off right with a positive thought. 8,2cm diameter / 9,5cm height / 0.43kg. Dishwasher-proof.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;