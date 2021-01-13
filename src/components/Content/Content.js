import React from 'react';

import Categories from './Category/Category';

import cls from './Content.module.css';
import Product from './Product/Product';



const Content = ({ data, rootName, rootTable, onAddProduct, BASE_URL }) => {


    const [ activeCategory, setActiveCategory ] = React.useState(0);

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
                                <Categories key = {index}
                                            id = { index }
                                            name = { item.name }
                                            activeCategory = { activeCategory }
                                            onClickSetCategory = { onClickSetCategory } />
                            )
                        })}
                    </div>
                </div>

                {/* Products */}
                <div className = {cls.content__products}>
                    {data.cafe.categories.map((item, index) => {
                        return (
                            <Product 
                                key = {index} 
                                id = { index } 
                                BASE_URL = { BASE_URL }
                                {...item} 
                                rootName = { rootName }
                                rootTable = { rootTable }
                                onAddProduct = { onAddProduct }/>
                        )
                    })}
                </div>

                

            </div>
           
        </div>
    )
}

export default Content;