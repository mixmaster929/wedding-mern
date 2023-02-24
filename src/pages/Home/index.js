import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { FaMountain, FaCarAlt, FaGlassCheers } from "react-icons/fa";
import { GiBigDiamondRing } from "react-icons/gi";
import styles from "./styles.module.css";
import CountdownTimer from './CountdownTimer';

function Home() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  const link1 = () => {
    navigate("/lake_garda");
  }
  const link2 = () => {
    navigate("/transportation");
  }
  const link3 = () => {
    navigate("/celebrate");
  }
  const link4 = () => {
    navigate("/wedding");
  }

return(
    <div className={styles.container}>
      <div className={styles.main}>
        <span className={styles.title}>
          Michael & Stephanie
        </span>
        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
        <span className={styles.overview}>We are getting married!</span>
        <div className={styles.socials}>
          <div className="d-flex flex-row mb-3 justify-content-evenly social-media">
            <div className={styles.icon}><FaMountain className={styles.social} onClick={() => link1()} /><div>Lake Garda</div></div>
            <div className={styles.icon}><FaCarAlt className={styles.social} onClick={() => link2()} /><div>Transportation</div></div>
            <div className={styles.icon}><FaGlassCheers className={styles.social} onClick={() => link3()} /><div>Let's Celebrate</div></div>
            <div className={styles.icon}><GiBigDiamondRing className={styles.social} onClick={() => link4()} /><div>Wedding</div></div>
          </div>
        </div>
      </div>
    </div>
  );
 
}

export default Home;
