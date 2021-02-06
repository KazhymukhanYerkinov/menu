import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {withRouter} from 'react-router-dom';
import { required, requiredPhone } from '../../utils/validators';
import { Input, TextArea } from '../common/FormControl/FormControl';
import Success from '../Success/Success';

import cls from './Order.module.css';



const OrderForm = ({ sum, obs, handleSubmit }) => {
    return (
        <form className={cls.order__form} onSubmit = { handleSubmit }>
            <div className={cls.order__input}>
                <label className={cls.label}> Имя </label>
                <Field  name = {'name'} component = { Input } placeholder = {'Имя'} type = {'text'} validate = { required } />
            </div>

            <div className={cls.order__phone}>
                <label className={cls.label}> Номер телефона </label>
                <Field name = {'phone'} component = { Input } type='tel' placeholder='Номер телефона' validate = { [required, requiredPhone] } />
            </div>

            <div className={cls.order__comment}>
                <label className={cls.label}> Коментарий к заказу <span className = {cls.subcom}> (*не обязательно) </span></label>
                <Field name = {'comment'} component = { TextArea } type = { 'text' } placeholder = {'Коментарий к заказу'}/>
            </div>

            <div className={cls.order__subtotal}>
                <div className={cls.order__row}>
                    <div className={cls.order__desc}> Промежуточный итог </div>
                    <div className={cls.order__price}> {sum} KZT </div>
                </div>

                <div className={cls.order__row}>
                    <div className={cls.order__desc}> Oбслуживание </div>
                    <div className={cls.order__price}> {obs} KZT </div>
                </div>
            </div>

            <div className={cls.order__total}>
                <div className={cls.order__row}>
                    <div className={cls.order__desc}> Всего </div>
                    <div className={cls.order__price}> {sum + obs} KZT </div>
                </div>
            </div>

            <button className={cls.order__button} type = 'submit'> Отправить </button>
        </form>
    )
}

const OrderReduxForm = reduxForm({ form: 'order' })(OrderForm);

const Order = ({ products, success, sum,rootName, rootTable, postOrderThunk, setSuccess, onClearProduct }) => {
    const sale = 15;
    const obs = Math.ceil(sum / 100 * sale);
    const items = [];

    for (let i = 0; i < products.length; i++) {
        const body = {food: products[i][0].id, count: products[i][1]};
        items.push(body)  
    }


    const onSubmit = (formData) => {
        postOrderThunk(formData.name, formData.phone, rootTable, formData.comment, items);
        onClearProduct();
    }

    return (
        <div className={cls.order}>
            <div className='container'>
                <div className={cls.order__inner}>

                    <OrderReduxForm  
                        onSubmit = { onSubmit }
                        sum = { sum }
                        obs = { obs }/>

                </div>
            </div>
            {success && <Success rootName = { rootName } rootTable = { rootTable } setSuccess = { setSuccess } />}
        </div>
    )
}

export default withRouter(Order);