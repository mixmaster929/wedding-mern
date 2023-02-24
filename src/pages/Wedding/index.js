import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

function Wedding() {
  const navigate = useNavigate();

  const onClickHandler = (event) => {
    event.preventDefault();
    navigate("/signin");
  }
  
  return (
    <div className={styles.container}>
      <div className="col-lg-4 col-md-6 col-sm-8 mx-auto">
        <div className={styles.splash_text}>
          <span>Welcome!</span><br /><br />
          <span>
            Thank you for joining us on our speical day. You each play a special ole in our hearts.
            We are so excited to be on this journey with you.
          </span>
        </div>
        <div className={styles.splash_button}>
          <button className={styles.splash} onClick={onClickHandler}>ENTER or Join us!</button>
        </div>
      </div>
    </div>
  );
}

export default Wedding;
