import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

function Transportation() {
  const navigate = useNavigate();

  const onClickHandler = (event) => {
    event.preventDefault();
    navigate("/signin");
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <div className={styles.boxs}>Transportation from Milan to Lake Garda</div>
        <div className={styles.boxs}>Car rentals</div>
        <div className={styles.boxs}>Train</div>
      </div>
    </div>
  );
}

export default Transportation;
