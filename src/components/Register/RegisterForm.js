import React, { useState, Fragment } from "react";
import styles from "../Styles/RegisterForm.module.scss";
import Button from "../UI/Button";
import Register from "./Register";

const RegisterForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredTag, setEnteredTag] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPass, setEnteredConfirmPass] = useState("");

  const changeNameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const changeTagHandler = (event) => {
    setEnteredTag(event.target.value);
  };
  const changePassHandler1 = (event) => {
    setEnteredPassword(event.target.value);
  };
  const changePassHandler2 = (event) => {
    setEnteredConfirmPass(event.target.value);
  };
  return (
    <Fragment>
      <button onClick={props.closeHandler} id={styles.close_btn}>
        <i class="fas fa-times"></i>
      </button>
      <form>
        <label for="fullName">Full Name</label>

        <input
          id="fullName"
          type="text"
          placeholder="Hatz Dorian"
          required
          onChange={changeNameHandler}
        />
        <label for="discordTag">Discord Tag</label>
        <input
          id="discordTag"
          type="text"
          placeholder="Hatz Dorian"
          required
          onChange={changeTagHandler}
        />

        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Hatz Dorian"
          required
          onChange={changePassHandler1}
        />

        <label for="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Hatz Dorian"
          required
          onChange={changePassHandler2}
        />

        <button type="submit">Register</button>
      </form>
    </Fragment>
  );
};

export default RegisterForm;
