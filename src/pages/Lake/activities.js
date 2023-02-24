import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

function Activities() {
  const navigate = useNavigate();

  const back = () => {
    // event.preventDefault();
    navigate(-1);
  }

  const data = [
    {id: 1, "title": "Winery Tour & Tasting", "image": "https://via.placeholder.com/300/09f/fff.png"},
    {id: 2, "title": "Cooking Class: Fresh Pasta with wine tasting", "image": "https://via.placeholder.com/300/09f/fff.png"},
    {id: 3, "title": "Winery Tour & Tasting", "image": "https://via.placeholder.com/300/09f/fff.png"},
    {id: 4, "title": "Winery Tour & Tasting", "image": "https://via.placeholder.com/300/09f/fff.png"},
    {id: 5, "title": "Tour of the Sirmione Peninsula", "image": "https://via.placeholder.com/300/09f/fff.png"},
    {id: 6, "title": "Winery Tour & Tasting", "image": "https://via.placeholder.com/300/09f/fff.png"},
    {id: 7, "title": "Winery Tour & Tasting", "image": "https://via.placeholder.com/300/09f/fff.png"},
    {id: 8, "title": "Winery Tour & Tasting", "image": "https://via.placeholder.com/300/09f/fff.png"},
    {id: 9, "title": "Winery Tour & Tasting", "image": "https://via.placeholder.com/300/09f/fff.png"},
    {id: 10, "title": "Winery Tour & Tasting", "image": "https://via.placeholder.com/300/09f/fff.png"},
    {id: 11, "title": "Winery Tour & Tasting", "image": "https://via.placeholder.com/300/09f/fff.png"},
    {id: 12, "title": "Winery Tour & Tasting", "image": "https://via.placeholder.com/300/09f/fff.png"},
  ]
  const divStyle={
    overflowY: 'scroll',
    height: '100vh',
  };
  return (
    <div className={styles.activities}>
      <div className={styles.gallery} style={divStyle}>
        {data.map((item) => {
          return <div key={item.id} className={styles.column}>
            <img src={item.image} className={styles.img} />
            <div className={styles.text_block}>
              {item.title}
            </div>
          </div>
        })}
      </div>
      <div className="d-flex flex-row mb-3 justify-content-evenly social-media">
        <div className={styles.left}><IoIosArrowDropleftCircle className={styles.arrow} onClick={() => back()} /><div>Back</div></div>
        <div className={styles.right}><IoIosArrowDroprightCircle className={styles.arrow} onClick={() => back()} /><div>Forward</div></div>
      </div>
    </div>
  );
}

export default Activities;
