import React from "react";

function ButtonField({ label = "", ...others }) {
  return (
    <div className={"form-field"}>
      <label>{label}</label>
      <button {...others} className={"text-input"} />
    </div>
  );
}

export default ButtonField;
