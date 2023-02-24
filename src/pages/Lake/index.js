import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { IoRestaurantSharp } from "react-icons/io5";
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { FiActivity } from 'react-icons/fi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdHotel } from 'react-icons/md';

function Lake() {
  const navigate = useNavigate();

  const back = () => {
    // event.preventDefault();
    navigate(-1);
  }
  const link1 = () => {
    navigate("/lake_garda/hotels"); 
  }
  const link2 = () => {
    navigate("/lake_garda/activities");
  }
  const link3 = () => {
    navigate("/lake_garda/restaurants");
  }
  const link4 = () => {
    navigate("/lake_garda/map");
  }
  
  return (
    <div className={styles.container}>
      <div className="col-lg-4 col-md-6 col-sm-8 mx-auto">
        <div className={styles.title}>
          <span className={styles.text}>Lake Garda</span><br /><br />
          <div className="d-flex flex-row mb-3 justify-content-evenly social-media">
            <div className={styles.icon}><MdHotel className={styles.social} onClick={() => link1()} /><div>Hotels</div></div>
            <div className={styles.icon}><FiActivity className={styles.social} onClick={() => link2()} /><div>Activities</div></div>
            <div className={styles.icon}><IoRestaurantSharp className={styles.social} onClick={() => link3()} /><div>Restaurants</div></div>
            <div className={styles.icon}><FaMapMarkerAlt className={styles.social} onClick={() => link4()} /><div>Map</div></div>
          </div>
        </div>
        <div className="d-flex flex-row mb-3 justify-content-evenly social-media">
          <div className={styles.back}><IoIosArrowDropleftCircle className={styles.arrow} onClick={() => back()} /><div>Back</div></div>
        </div>
      </div>
    </div>
  );
}

export default Lake;
