import React from 'react';
import cls from './Delete.module.css';



const Delete = ({ lastItem, setLastItem, onDeleteLast }) => {
    const onHide = () => {
        setLastItem(null);
    }
    const onHandle = () => {
        onDeleteLast(lastItem);
        setLastItem(null);
    }
    return (
        <div className = {cls.delete}>
            <div className = {cls.delete__inner}>
                <div className = {cls.delete__text}> вы действительно хотите удалить {lastItem.name} ? </div>
                <div className = {cls.delete__buttons}>
                    <div className = {cls.close} onClick = { onHide }> Отменить </div>
                    <div className = {cls.ok} onClick = { onHandle }> ОК </div>
                </div>
            </div>
        </div>
    )
}

export default Delete;