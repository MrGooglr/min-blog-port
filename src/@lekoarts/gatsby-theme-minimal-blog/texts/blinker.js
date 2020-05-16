import React from "react";
import "./custom.css";


const Blinker = ({ children }) => (
  <span className="blink">{children}</span>
);

export default Blinker;