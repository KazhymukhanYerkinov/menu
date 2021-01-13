import React from 'react';
import cls from './FormControl.module.css';

const FormControl = ({  meta, children }) => {
    const hasError = meta.touched && meta.error;

    return (                                    
        <div className = {cls.form__control}>
            <div>
                {children}
            </div>
            { hasError && <small className = {cls.errorr}> {meta.error} </small> }
        </div>
    )
}

export const TextArea = (props) => {
    const { input, meta, placeholder, type } = props;
    return <FormControl {...props}> 
                <textarea {...input} className = {cls.textarea} placeholder = { placeholder } type = { type }/> 
            </FormControl>
}
export const Input = (props) => {
    const { input, meta, placeholder, type } = props;
    return <FormControl {...props}>
                <input {...input} className = {cls.input} placeholder = { placeholder } type = { type } />
           </FormControl>
}

