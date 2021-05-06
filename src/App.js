import React, { useState } from "react";
import "./App.css";
import PlateInput from "./components/PlateInput";
import DateInput from "./components/DateInput";
import QueryButton from "./components/QueryButton";

function App() {
  const [date, setSelectedDate] = useState("");
  const [plate, setPlate] = useState("");

  return (
    <div className="page-container">
      <div className="container">
        <h1 className="title">Pico y Placa</h1>
        <PlateInput plateProp={{ plate, setPlate }} />
        <DateInput dateProp={{ date, setSelectedDate }} />
        <QueryButton />
      </div>
    </div>
  );
}

export default App;
