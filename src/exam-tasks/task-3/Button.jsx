import React from "react";
import "./Button.css";

const Button = ({ text, customClass }) => {
  return <button className={customClass}>{text}</button>;
};

export default Button;
