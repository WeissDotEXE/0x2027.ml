import React from 'react';
import styles from '../Styles/Button.module.scss';

const Button=(props)=>{
    return(
        <div className={`${styles.button} ${props.className}`} type={props.type || "button"} onClick={props.onClick}>
            {props.children}
        </div>
    );
}

export default Button;