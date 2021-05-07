import React, { useState } from "react";
import "./App.css";
import PlateInput from "./components/PlateInput";
import DateInput from "./components/DateInput";
import QueryButton from "./components/QueryButton";
import NormalResult from "./components/NormalResult";

function App() {
  const [date, setSelectedDate] = useState("");
  const [plate, setPlate] = useState("");

  const isDisabled = () => {
    if (!date && !date?.length) {
      return true;
    }
    if (plate?.replaceAll?.("_", "").length !== 8) {
      return true;
    }
    return false;
  };

  return (
    <div className="page-container">
      <div className="container">
        <h1 className="title">Pico y Placa</h1>
        <PlateInput plateProp={{ plate, setPlate }} />
        <DateInput dateProp={{ date, setSelectedDate }} />
        <QueryButton disabled={isDisabled()} />
      </div>
      <div className="container">
        <div className="col">
          <NormalResult date={date} plate={plate} />
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default App;
