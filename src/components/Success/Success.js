import React from 'react';
import { Link } from 'react-router-dom';

import success from '../../assets/images/success.svg';

import cls from './Success.module.css';

const Success = ({ onHideSuccess }) => {
    return (
        <div className = {cls.success}>
            <div className = {cls.success__inner}>
                <img className = {cls.success__image} src = { success } alt = ""/>
                <div className = {cls.success__title}> Поздравляем, ваш заказ успешно отправлен </div>
                <Link to = '/' className = {cls.success__button} onClick = { onHideSuccess }> Главная страница </Link>
            </div>
        </div>
    )
}

export default Success