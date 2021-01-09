import React from 'react';

import Categories from './Category/Category';

import cls from './Content.module.css';
import Product from './Product/Product';

import plate1 from '../../assets/images/plate1.png';
import plate2 from '../../assets/images/plate2.png';
import plate3 from '../../assets/images/plate3.png';




const list = ["ALL","PIZZAS","BURGERS","DRINKS","SUSHIES","HOOKAHS","FASTFOODS", "FRUKTS"];
const products = [
    {id: 1, imge: plate1, name: 'Barbecue salad', desc: 'Delicious dish', price: 1200},
    {id: 2, imge: plate2, name: 'Barbecue salad', desc: 'Delicious dish', price: 1400},
    {id: 3, imge: plate3, name: 'Barbecue salad', desc: 'Delicious dish', price: 1700},
    {id: 4, imge: plate1, name: 'Barbecue salad', desc: 'Delicious dish', price: 1800},
    {id: 5, imge: plate2, name: 'Barbecue salad', desc: 'Delicious dish', price: 2000},
    {id: 7, imge: plate3, name: 'Barbecue salad', desc: 'Delicious dish', price: 1200},
    {id: 8, imge: plate1, name: 'Barbecue salad', desc: 'Delicious dish', price: 1400},
    {id: 9, imge: plate2, name: 'Barbecue salad', desc: 'Delicious dish', price: 1100},
    {id: 10, imge: plate3, name: 'Barbecue salad', desc: 'Delicious dish', price: 900},
    {id: 11, imge: plate1, name: 'Barbecue salad', desc: 'Delicious dish', price: 100},

]

const Content = () => {
    

    const [ activeCategory, setActiveCategory ] = React.useState(0);

    const onClickSetCategory = (index) => {
        setActiveCategory(index)
    }

    return (
        <div className={cls.content}>
            <div className='container'>
                {/* Categories */}
                <div className={cls.content__categories}>
                    {list.map((item, index) => {
                        return (
                            <Categories key = {`${item}__${index}`}
                                        id = { index }
                                        name = { item }
                                        activeCategory = { activeCategory }
                                        onClickSetCategory = { onClickSetCategory } />
                        )
                    })}
                </div>

                {/* Products */}
                <div className = {cls.content__products}>
                    {products.map((item, index) => {
                        return (
                            <Product key = {index} {...item}/>
                        )
                    })}
                </div>

                

            </div>
           
        </div>
    )
}

export default Content;