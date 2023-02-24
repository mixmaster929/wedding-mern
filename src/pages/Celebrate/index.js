import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { FaMountain, FaCarAlt, FaGlassCheers } from "react-icons/fa";

function Celebrate() {
  const navigate = useNavigate();

  const onClickHandler = (event) => {
    event.preventDefault();
    navigate("/signin");
  }
  
  return (
    <div className={styles.container}>
      
      {/* Where to go */}

      {/* What to wear */}
      <div className="col-lg-4 col-md-6 col-sm-8 mx-auto">
        <div className={styles.splash_text}>
          <span>Lake Garda!</span><br /><br />
          <div className="d-flex flex-row mb-3 justify-content-evenly social-media">
            
          </div>
        </div>
        <div className={styles.splash_button}>
          <button className={styles.splash} onClick={onClickHandler}>ENTER or Join us!</button>
        </div>
      </div>
    </div>
  );
}

export default Celebrate;
