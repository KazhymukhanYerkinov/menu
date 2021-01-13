import React from 'react';
import cls from './Category.module.css';
import classNames from 'classnames';





const Categories = ({ activeCategory, name, id, onClickSetCategory }) => {

    

    const links = document.querySelectorAll('.scroll__link');
    for (const link of links) {
        link.addEventListener("click", clickHandler);
    }

    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
      
        document.querySelector(href).scrollIntoView({
          behavior: "smooth"
        });
    }
    

    return (
            <a href = {`#section_${id}`} className = 'scroll__link'>
                <div
                    className={classNames(cls.item,
                    {[cls.active]: activeCategory === id})} 
                    onClick = { () => onClickSetCategory(id)}
                    >
                    { name }
                </div>
            </a>
           
    )
}

export default Categories;