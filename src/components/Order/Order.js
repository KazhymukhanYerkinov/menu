import React from 'react';

import Success from '../Success/Success';

import cls from './Order.module.css';


const Order = () => {

    const [ showSuccess, setShowSuccess ] = React.useState(false);

    const onShowSuccess = () => {
        setShowSuccess(true)
    }
    const onHideSuccess = () => {
        setShowSuccess(false)
    }

    return (
        <div className = {cls.order}>
            <div className = 'container'>
                <div className = {cls.order__inner}>

                    <form className = {cls.order__form}>
                        <div className = {cls.order__input}>
                            <label className = {cls.label}> Имя </label>
                            <input className = {cls.input} type = 'text' placeholder = 'Имя'/>
                        </div>

                        <div className = {cls.order__phone}>
                            <label className = {cls.label}> Номер телефона </label>
                            <input className = {cls.input} type = 'text' placeholder = 'Номер телефона'/>
                        </div>

                        <div className = {cls.order__comment}>
                            <label className = {cls.label}> Коментарий к заказу </label>
                            <textarea className = {cls.textarea} type = 'text' placeholder = 'Коментарий к заказу'></textarea>
                        </div>
                    </form>

                    <div className = {cls.order__result}>
                        <div className = {cls.order__subtotal}>
                            <div className = {cls.order__row}>
                                <div className = {cls.order__desc}> Промежуточный итог </div>
                                <div className = {cls.order__price}> 11200 KZT </div>
                            </div>

                            <div className = {cls.order__row}>
                                <div className = {cls.order__desc}> Oбслуживание </div>
                                <div className = {cls.order__price}> 778 KZT </div>
                            </div>
                        </div>

                        <div className = {cls.order__total}>
                            <div className = {cls.order__row}>
                                <div className = {cls.order__desc}> Всего </div>
                                <div className = {cls.order__price}> 11978 KZT </div>
                            </div>
                        </div>

                        <button className = {cls.order__button} onClick = { onShowSuccess }> Отправить </button>
                    </div>
                </div>
            </div>
            {showSuccess &&  <Success onHideSuccess = { onHideSuccess }/>}
        </div>
    )
}

export default Order;