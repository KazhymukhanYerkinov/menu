import React from 'react';

import minus from '../../assets/images/minus.svg';
import plus from '../../assets/images/plus.svg';

import cls from './Detail.module.css';
import { withRouter } from 'react-router-dom';


const Detail = ({ data, match, BASE_URL, onAddProduct }) => {

    const [ count, setCount ] = React.useState(1);
    const [ value, setValue ] = React.useState({});

    const onPlus = () => {
        setCount(count => count + 1);
    }
    const onMinus = () => {
        if (count > 1) {
            setCount(count => count - 1);
        }
    }

    React.useEffect(() => {
        const detail = data.categories
        for (let i = 0; i < detail.length; i++) {
            for (let j = 0; j < detail[i].foods.length; j++) {
                if (detail[i].foods[j].id === parseInt(match.params.productID)) {
                    setValue(detail[i].foods[j])
                }
            }  
        }
    }, [])
    
    return (
        <div className = {cls.detail}>
            <div className = 'container'>
                <div className = {cls.detail__inner}>
                    <img src = { BASE_URL + '' + value.image } alt = "" className = {cls.detail__image}/>
                    <div className = { cls.detail__name }> { value.name } </div>
                    <div className = {cls.discount}>
                        <div className = { cls.detail__price }> {value.is_discounted ? value.total_price: value.price } KZT </div>
                        {value.is_discounted && <div className = { cls.detail__discount }> { value.price } KZT </div>}
                    </div>
                    <div className = {cls.quantity}>
                        <div className = {cls.quantity__text}> Количество: </div>   

                        <div className = {cls.quantity__input}>
                            <img className = {cls.quantity__minus} src = { minus } alt = "" onClick = { onMinus }/>
                            <div className = {cls.quantity__count}> { count } </div>
                            <img className = {cls.quantity__plus} src = { plus } alt = ""  onClick = { onPlus }/>
                        </div>
                    </div>

                    <div className = {cls.detail__button} onClick = {() => onAddProduct(value, count)}>
                        добавить в корзину
                    </div>

                    <div className = {cls.detail__desc}>
                        <div className = {cls.desc__title}>
                        Описание
                        </div>

                        <div className = {cls.desc__text}>
                            { value.description }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Detail);