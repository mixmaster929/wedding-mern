import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomPasswordInput from "../../components/CustomPasswordInput";
import styles from "./styles.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { BsFacebook, BsApple, BsGoogle, BsArrowRight } from "react-icons/bs";
import GoogleAuth from "../../components/GoogleAuth/GoogleAuth";
import FacebookAuth from "../../components/FacebookAuth/FacebookAuth";


function Signup() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  //add a User
  const onChangeHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (event) => {
    setIsLoading(true);
    event.preventDefault();
    axios
      .post("/user/signup", form)
      .then((response) => {
        setTimeout(() => {
          setIsLoading(false);
          navigate("/signin");
        }, 1000);
      })
      .catch((err) => {
        setErrors(err.response.data);
        setIsLoading(false);
      });
  };

  const informParent = (response) => {
    setIsLoading(true);
    const token = response.data.token;
    // Save token to localStorage
    localStorage.setItem("user-token", JSON.stringify(token));
    localStorage.setItem("user", JSON.stringify(response.data.user));
    window.location.reload(false);
    setTimeout(() => {
      navigate("/");
      setIsLoading(false);
    }, 1000);
  };

  const inputStyle = { borderRadius: "15px" };


return(
    <div className={styles.container}>
          {/* <div className="App">{isLoading ? <LoadingSpinner /> : ""}</div> */}

      <div className={styles.main}>
        <h2 className={styles.header}>
          Sign up
        </h2>
        <form className="form-group" onSubmit={onSubmitHandler}>
          <CustomInput
            label="Email or phone number"
            placeholder="name@exemple.com"
            type="email"
            name="email"
            onChange={onChangeHandler}
            errors={errors.email}
            style={inputStyle}
          />
          <CustomPasswordInput
            label="Password"
            placeholder="password"
            type="password"
            name="password"
            icon="fa-solid fa-lock"
            onChange={onChangeHandler}
            errors={errors.password}
            style={inputStyle}
          />
          <button className={styles.submit} type="submit" disabled={isLoading}>
            Sign up
            <span className={styles.arrow}>
              <BsArrowRight /> 
            </span>
          </button>
          <div className="row px-3 mb-4">
            <div className="line"></div>
            <small className="or text-center">OR</small>
            <div className="line"></div>
          </div>
          <div className="d-flex flex-row mb-3 justify-content-evenly social-media">
            <GoogleAuth informParent={informParent} />
            <FacebookAuth informParent={informParent} />
          </div>
          {/* <div className={styles.socials}>
            <span>OR</span>
            <div className="social-btns">
              <span className="social-btn">
                <BsGoogle /> 
              </span>
              <span className="social-btn"><BsFacebook /></span>
              <span className="social-btn"><BsApple /></span>
            </div>
          </div> */}
          <h6 className="login">
            Already have an account? <Link to="/signin">Log in</Link>
          </h6>
        </form>
      </div>
    </div>
  );
 
}

export default Signup;
