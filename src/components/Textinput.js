import React from "react";
import classes from "../Styles/TextInput.module.css";
export default function Textinput({ icon, ...rest }) {
  return (
    <div className={classes.textInput}>
      <input {...rest} />
      <span className="material-icons-outlined">{icon}</span>
    </div>
  );
}
