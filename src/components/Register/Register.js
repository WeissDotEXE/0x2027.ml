import React, { Fragment } from "react";
import styles from "../Styles/Register.module.scss";
import Card from "../UI/Card";
import RegisterForm from "./RegisterForm";

const Register = (props) => {
  return (
    <Fragment>
      <div onClick={props.closeHandler} className={styles.backdrop}></div>
      <div className={styles.register}>
        <Card className={styles.register_card}>
          <RegisterForm closeHandler={props.closeHandler}/>
        </Card>
      </div>
    </Fragment>
  );
};

export default Register;
