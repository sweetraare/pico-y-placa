import React, { useState } from "react";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import "../App.css";
registerLocale("es", es);

function DateInput({ dateProp }) {
  const { date, setSelectedDate } = dateProp;
  return (
    <div className="input-container">
      <label className="d-flex">
        <span className="input__label">Ingrese el día que desea salir</span>
        <DatePicker
          selected={date}
          onChange={setSelectedDate}
          showTimeSelect
          locale="es"
          dateFormat="dd/mm/yyyy h:mm aa"
          timeIntervals={15}
          minDate={new Date()}
        />
      </label>
    </div>
  );
}

export default DateInput;
