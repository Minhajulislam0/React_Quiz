import React from "react";
import signupimage from "../assets/images/signup.svg";
import classes from "../Styles/Illustration.module.css";

export default function Illustration() {
  return (
    <div className={classes.illustration}>
      <img src={signupimage} alt="Signup" />
    </div>
  );
}
