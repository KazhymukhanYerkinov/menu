import React from 'react';
import cls from './Category.module.css';
import classNames from 'classnames';






const Categories = ({ activeCategory, name, id, onClickSetCategory, handleClick}) => {
    
    

    return (
            <div onClick = {() => handleClick(id)}>
                <div
                    className={classNames(cls.item,
                    {[cls.active]: activeCategory === id})} 
                    onClick = { () => onClickSetCategory(id)}
                    >
                    { name }
                </div>
            </div> 
    )
}

export default Categories;