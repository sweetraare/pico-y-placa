import React, { useState } from "react";
import InputMask from "react-input-mask";
import "../App.css";

function PlateInput({ plateProp }) {
  const mask = "aaa-9999";

  const { plate, setPlate } = plateProp;

  return (
    <div className="input-container">
      <label className="d-flex">
        <span className="input__label">Ingrese su Placa</span>
        <InputMask
          value={plate}
          mask={mask}
          alwaysShowMask
          onChange={(e) => setPlate(e.target.value.toUpperCase())}
        />
      </label>
      {plate?.replaceAll?.("_", "").length !== 8 && (
        <p className="error-message">Debe ingresar una placa válida</p>
      )}
    </div>
  );
}

export default PlateInput;
