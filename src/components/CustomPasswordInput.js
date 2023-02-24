import React, { useState } from "react";
import classnames from "classnames";
function CustomPasswordInput({
  label,
  type,
  icon,
  placeholder,
  name,
  onChange,
  errors,
  password,
  style
}) {
  // const [passwordVisible, setPasswordVisible] = useState(password);
  const onClickPassword = ()  => {
    // toggle the type attribute
    const togglePassword = document.querySelector("#togglePassword");
    const passwordV = document.querySelector("#password_field");
    const type = passwordV.getAttribute("type") === "password" ? "text" : "password";
    togglePassword.className === 'fa fa-eye viewpass mr-4 text-muted' ? document.getElementById("togglePassword").className = 'fa fa-eye-slash viewpass mr-4 text-muted' : document.getElementById("togglePassword").className = 'fa fa-eye viewpass mr-4 text-muted';
    passwordV.setAttribute("type", type);
  }
  const viewpass = {
      float: 'right',
      marginLeft: '-25px',
      marginTop: '10px',
      position: 'relative',
      fontSize: 'large',
      zIndex: '2',
  }
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <div className="input-group">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          className={classnames("form-control", { "is-invalid": errors })}
          style={style}
          required
          autoComplete="false"
          id="password_field"
        />
        {/* <i className='fas fa-eye-slash'></i> */}

        {/* <span onClick={onClickPassword} > */}
          <i className="fa fa-eye viewpass mr-4 text-muted" style={viewpass} onClick={onClickPassword} id="togglePassword"></i>
        {/* </span> */}
        

        {/* {password && (
          <span className="input-group-text">
            <i
              onClick={() => setPasswordVisible(!passwordVisible)}
              className={`fa ${passwordVisible ? "fa-eye-slash" : "fa-eye"}`}
            ></i>
          </span>
        )} */}
        {errors && <div className="invalid-feedback">{errors}</div>}{" "}
      </div>
    </div>
  );
}

export default CustomPasswordInput;
