import React from 'react';
import smoothscroll from "smoothscroll-polyfill";

import Categories from './Category/Category';

import cls from './Content.module.css';
import Product from './Product/Product';

const list = [];


const Content = ({ data, rootName, rootTable, onAddProduct, BASE_URL }) => {
    smoothscroll.polyfill();
    
    const [ activeCategory, setActiveCategory ] = React.useState(0);
    
    for (let i = 0; i < data.cafe.categories.length; i++) {
        list.push({id: i, name: `section_${i}`});
    }
    
    const refs = list.reduce((acc, value) => {
        acc[value.id] = React.createRef();
        return acc;
    }, {});

    const handleClick = id => {
        return refs[id].current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
    
    
    const onClickSetCategory = (index) => {
        setActiveCategory(index)  
    }

   

    
    
    return (
        <div className={cls.content}>
            <div className='container'>
                
                {/* Categories */}
                <div className = {cls.position}>
                    <div className={cls.content__categories}>
                        {data.cafe.categories.map((item, index) => {
                            return (
                                item.foods.length > 0 &&
                                <Categories key = {index}
                                            id = { index }
                                            handleClick = { handleClick }
                                            name = { item.name }
                                            activeCategory = { activeCategory }
                                            onClickSetCategory = { onClickSetCategory } />
                            )
                        })}
                    </div>
                </div>

                {/* Products */}
                <div className = {cls.content__products}>
                    <div className = {cls.empty}></div>
                    {data.cafe.categories.map((item, index) => {
                        return (
                            item.foods.length > 0 &&
                            <div className = {cls.content__width} key = { index } ref = {refs[index]}>
                                <section className={cls.title}> {item.name} </section>

                                <Product 
                                    id = { index } 
                                    BASE_URL = { BASE_URL }
                                    {...item} 
                                    rootName = { rootName }
                                    rootTable = { rootTable }
                                    onAddProduct = { onAddProduct }/>
                            </div>
                        )
                    })}
                </div>

                

            </div>
           
        </div>
    )
}
const areEqual = (prevProps, nextProps) => {
    return prevProps.data === nextProps.data;
}

export default React.memo(Content, areEqual);