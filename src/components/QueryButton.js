import React, { useState } from "react";
import "../App.css";

function QueryButton({ text, ...props }) {
  return (
    <button className="btn query-button" {...props}>
      {text}
    </button>
  );
}

export default QueryButton;
