import React, { useState } from "react";
import "../App.css";

function QueryButton({ disabled }) {
  return (
    <div className="d-flex j-end">
      <button
        className="btn query-button"
        disabled={disabled}
        onClick={() => console.log("a")}
      >
        Consultar
      </button>
    </div>
  );
}

export default QueryButton;
