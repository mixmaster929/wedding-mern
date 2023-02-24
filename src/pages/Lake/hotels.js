import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
// import { IoRestaurantSharp } from "react-icons/io5";
import { IoIosArrowDropleftCircle } from 'react-icons/io';
// import { FiActivity } from 'react-icons/fi';
// import { FaMapMarkerAlt } from 'react-icons/fa';
// import { MdHotel } from 'react-icons/md';
import ReactStars from "react-rating-stars-component";


function Hotels() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const back = () => {
    // event.preventDefault();
    navigate(-1);
  }
  const hotels = [
    {"id": 1, "name": "Grand Hotel Gardone", "link": "https://www.grandhotelgardone.it/it/", "star": 4},
    {"id": 2, "name": "Savoy Palace Hotel", "link": "https://www.savoypalace.it/", "star": 4},
    {"id": 3, "name": "Hotel Montebaldo", "link": "https://hotelmontebaldo.com/", "star": 4},
    {"id": 4, "name": "Hotel Spiaggia d'oro", "link": "https://www.hotelspiaggiadoro.com/it/index.html", "star": 4},
    {"id": 5, "name": "Park Hotel Montefiori", "link": "https://www.hotelvillemontefiori.it/lagodigarda/benvenuti.html", "star": 4},
    {"id": 6, "name": "Hotel Villa Fiordaliso", "link": "https://www.villafiordaliso.it/", "star": 4},
    {"id": 7, "name": "Grand Hotel Fasano", "link": "https://www.ghf.it/home", "star": 5},
    {"id": 8, "name": "Hotel Villa Carpi", "link": "https://www.hotelvillacapri.com/", "star": 4},
    {"id": 9, "name": "Hotel Villa da Sogno", "link": "https://www.villadelsogno.it/", "star": 5},
    {"id": 10, "name": "Hotel Bella Riva", "link": "https://bellarivagardone.it/", "star": 5},
    {"id": 11, "name": "Rivalta Life Style Hotel", "link": "https://www.rivaltalifestylehotel.it/", "star": 4},
    {"id": 12, "name": "Hotel Salo du Parc", "link": "https://www.saloduparc.it/", "star": 4},
    {"id": 13, "name": "Borgo il Mezzanino", "link": "https://www.borgoilmezzanino.com/", "star": 4},
    {"id": 14, "name": "Bike Hotel Touring Gardone Riviera & Wellness", "link": "https://www.hoteltouringgardone.it/", "star": 3},
    {"id": 15, "name": "DOMINA BORGO DEGLI ULIVI", "link": "https://www.domina.it/hotel/domina-borgo-degli-ulivi/", "star": 3},
    {"id": 16, "name": "Hotel Bellevue", "link": "https://www.hotelbellevuegardone.com/it/", "star": 3},
    {"id": 17, "name": "Hetel Villa Maria Au Lac", "link": "https://www.hotel-villamaria.org/camere.asp", "star": 3},
  ]
  const ratingChanged = (newRating) => {
    const result = hotels.filter((item) => item.star === newRating);
    setData(result);
    console.log(result);
  };
  const divStyle={
    overflowY: 'scroll',
    height: '55vh',
  };

  return (
    <div className={styles.container1}>
      <div className={styles.star_rating}>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={36}
          isHalf={false}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
          color="#fff"
        />
        <div style={divStyle}>
        {data.map((item)=>{
          return <div key={item.id} className={styles.box}>
            <div>{item.name}</div>
            <div>{item.link}</div>
          </div>
        })}
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-8 mx-auto">
        <div className="d-flex flex-row mb-3 justify-content-evenly social-media">
          <div className={styles.back}><IoIosArrowDropleftCircle className={styles.arrow} onClick={() => back()} /><div>Back</div></div>
        </div>
      </div>
    </div>
  );
}

export default Hotels;
