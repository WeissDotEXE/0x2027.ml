import React, {useState} from "react";
import styles from "../Styles/Footer.module.scss";
import Button from '../UI/Button';
import Register from '../Register/Register';
import Login from '../Login/Login';
const Footer=()=>{

    const [showRegister,setShowRegister]=useState(false);
    const [showLogin,setShowLogin]=useState(false);

    let formType=null;

    const showRegisterHandler=()=>{
        setShowRegister(true);
    }
    const showLoginHandler=()=>{
        setShowLogin(true);
    }

    const closeHandler=()=>{
        setShowLogin(false);
        setShowRegister(false);
    }

    if(showRegister===true){
        formType=<Register closeHandler={closeHandler}/>
    }
    else if(showLogin===true){
        formType=<Login closeHandler={closeHandler}/>
    }
    return(
        <div className={styles.footer}>
            <Button onClick={showRegisterHandler} className={styles.footer_btn}>Register</Button>
            <Button onCLick={showLoginHandler}>Login</Button>
            {formType}
        </div>
    );
}

export default Footer;