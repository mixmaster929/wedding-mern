import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "../../components/CustomInput";
import CustomPasswordInput from "../../components/CustomPasswordInput";
import GoogleAuth from "../../components/GoogleAuth/GoogleAuth";
import FacebookAuth from "../../components/FacebookAuth/FacebookAuth";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import styles from "./styles.module.css";
import { BsFacebook, BsApple, BsGoogle, BsArrowRight } from "react-icons/bs";

function Signin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", name: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  //User signin
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
      .post("/user/signin", form)
      .then((response) => {
        const token = response.data.token;
        // Save token to localStorage
        localStorage.setItem("user-token", JSON.stringify(token));
        localStorage.setItem("user", JSON.stringify(response.data.user));

        window.location.reload(false);
        setTimeout(() => {
          navigate("/");
          setIsLoading(false);
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

  return (
    <div className={styles.container} onSubmit={onSubmitHandler}>
      <div className={styles.main}>
        <h2 className={styles.header}>
          Sign in
        </h2>
        <form className="form-group">
          <CustomInput
            label="Email"
            placeholder="name@exemple.com"
            type="text"
            name="email"
            icon="fa fa-envelope"
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
          {/* <button className="submit" type="submit">
            sign in
          </button> */}
          <button className={styles.submit} type="submit" disabled={isLoading}>
            Sign in
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
          <h6>
            If you dont have an account yet,{" "}
            <Link to="/signup">Creat One</Link> here!
          </h6>
        </form>
      </div>
    </div>
  );
  // return (
  //   <div className="App">{isLoading ? <LoadingSpinner /> : renderSignin}</div>
  // );
}

export default Signin;
