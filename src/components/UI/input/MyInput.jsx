import React from 'react';
import { forwardRef } from 'react';
import styles from './MyInput.module.css'

const MyInput = forwardRef(({type}, ref) => {
    return (
        <input ref={ref} type={type} className={styles.myInput}/>
    );
})

export default MyInput;