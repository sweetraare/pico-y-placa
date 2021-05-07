import React, { useState } from "react";
import "./App.css";
import PlateInput from "./components/PlateInput";
import DateInput from "./components/DateInput";
import QueryButton from "./components/QueryButton";
import NormalResult from "./components/NormalResult";
import HoyNoCirculaResult from "./components/HoyNoCirculaResult";

function App() {
  const [date, setSelectedDate] = useState("");
  const [plate, setPlate] = useState("");

  const picoYPlacaURL =
    "https://elyex.com/horario-de-pico-y-placa-quito-2020-multas-y-mapa/";
  const hoyNoCirculaURL =
    "https://as.com/diarioas/2021/05/03/actualidad/1620072443_222020.html";

  return (
    <div className="page-container">
      <div className="container">
        <h1 className="title">Pico y Placa</h1>
        <PlateInput plateProp={{ plate, setPlate }} />
        <DateInput dateProp={{ date, setSelectedDate }} />
      </div>
      <div className="response-container d-flex">
        <div className="col card">
          <h3 className="title">Pico Y Placa</h3>
          <NormalResult date={date} plate={plate} />
          <a target="_blank" href={picoYPlacaURL}>
            <QueryButton text={"Consultar sobre pico y placa"} />
          </a>
        </div>
        <div className="col card">
          <h3 className="title">Hoy no Circula (Toque de queda)</h3>
          <HoyNoCirculaResult date={date} plate={plate} />
          <a target="_blank" href={hoyNoCirculaURL}>
            <QueryButton text={"Consultar sobre hoy no circula"} />
          </a>
        </div>
      </div>
      <p className="sign">Made by: sweetraare</p>
    </div>
  );
}

export default App;
