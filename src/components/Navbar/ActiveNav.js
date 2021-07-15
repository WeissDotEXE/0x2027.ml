import React from "react";
import styles from "../Styles/ActiveNav.module.scss";
import { Link } from "react-router-dom";

const ActiveNav = (props) => {
  return (
    <div className={styles.activeNav}>
        <button onClick={props.buttonHandler}><i class="fas fa-times"></i></button>
      <div className={styles.links}>
      <Link className={styles.link} to="/courses">
        <p>Courses</p>
      </Link>
      <Link className={styles.link} to="/profile">
        <p>Profile</p>
      </Link>
      </div>
    </div>
  );
};

export default ActiveNav;
