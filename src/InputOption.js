import React from "react";
import "./Inputoption.css";
function InputOption({ Icon, name, color }) {
  return (
    <div className="inputOption">
      <Icon style={{ color: color }} />
      <h4>{name}</h4>
    </div>
  );
}

export default InputOption;
