import React, { Fragment } from "react";
import styles from "../Styles/Home.module.scss";
import background from "../Media/200.gif";
import Footer from "./Footer";
const Home = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.background}>
        <img src={background} />
      </div>
      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
