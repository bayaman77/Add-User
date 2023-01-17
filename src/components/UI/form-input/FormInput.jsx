import React from 'react';
import { forwardRef } from 'react';
import MyInput from '../input/MyInput';
import styles from './FormInput.module.css'

const FormInput = forwardRef(({label, inputType}, ref) => {
    return (
        <div className={styles.formInputContainer}>
            <label>{label}</label>
            <MyInput ref={ref} type={inputType}/>
        </div>
    );
})

export default FormInput;