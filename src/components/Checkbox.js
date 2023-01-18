import React from "react";

export default function Checkbox({ className, text, ...rest }) {
  return (
    <lable className={className}>
      <input type="checkbox" {...rest} /> <span>{text}</span>
    </lable>
  );
}
