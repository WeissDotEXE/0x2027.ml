import React, { Fragment } from "react";
import styles from "../Styles/Footer.module.scss";
import Button from '../UI/Button';
const Footer=()=>{
    return(
        <div className={styles.footer}>
            <Button>Register</Button>
            <Button>Login</Button>
        </div>
    );
}

export default Footer;