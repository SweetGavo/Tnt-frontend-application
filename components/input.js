import React, { Component } from "react";

function Input(props) {
  return (
    <div>
      <form>
        <input
          className="input_css"
          type="text"
          placeholder="E.g jonathandoe@gmail.com"
          required
        />
      </form>
    </div>
  );
}

export default Input;
