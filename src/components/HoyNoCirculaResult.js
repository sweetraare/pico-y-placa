import React, { useState } from "react";
import isWeekend from "date-fns/isWeekend";
import getHours from "date-fns/getHours";
import getMinutes from "date-fns/getMinutes";
import getDay from "date-fns/getDay";
import { ESPECIAL_VALUES } from "../constants/contants";

function HoyNoCirculaResult({ plate, date }) {
  const isInHourRange = () => {
    const hours = getHours(new Date(date));

    if (hours >= 5 && hours <= 20) {
      return true;
    }
    return false;
  };

  const renderMessage = () => {
    if (isWeekend(new Date(date))) {
      return "No se puede circular en fines de semana";
    }
    if (ESPECIAL_VALUES.includes(plate[1])) {
      return "Puede circular ya que es un vehículo con concesión";
    }
    if (isInHourRange()) {
      return "Puede circular hasta las 20:00";
    }
    if (!isInHourRange()) {
      return "No puede circular desde las 20:00 hasta las 05:00";
    }
    return "No puede circular";
  };

  return <div>{renderMessage()}</div>;
}

export default HoyNoCirculaResult;
