import React, { useState } from "react";
import isWeekend from "date-fns/isWeekend";
import getHours from "date-fns/getHours";
import getMinutes from "date-fns/getMinutes";
import getDay from "date-fns/getDay";
import { ESPECIAL_VALUES } from "../constants/contants";

function NormalResult({ plate, date }) {
  const isOutOfTimeRange = () => {
    const hours = getHours(new Date(date));
    const minutes = getMinutes(new Date(date));

    if (hours >= 20 || hours < 7) {
      return true;
    }
    if (hours > 10 && hours < 16) {
      return true;
    }
    if (hours === 9 && minutes > 30 && hours < 16) {
      return true;
    }
    if (hours === 19 && minutes >= 30 && hours > 9) {
      return true;
    }
    return false;
  };

  const isPlateAble = () => {
    const dayOfTheWeek = getDay(new Date(date));
    const lastDigitPlate = Number.parseInt(plate.substr(plate.length - 1));
    if (
      isNaN(lastDigitPlate) ||
      (dayOfTheWeek * 2) % 10 === lastDigitPlate ||
      dayOfTheWeek * 2 - 1 === lastDigitPlate
    ) {
      return false;
    }
    return true;
  };

  const renderMessage = () => {
    if (isWeekend(new Date(date))) {
      return "Puede circular ya que es fin de semana";
    }
    if (ESPECIAL_VALUES.includes(plate[1])) {
      return "Puede circular ya que es un vehículo con concesión";
    }
    if (isOutOfTimeRange()) {
      return "Puede circular ya que está fuera del horario del pico y placa";
    }
    if (isPlateAble()) {
      return "Puede circular ya que su placa no tiene restricción hoy";
    }
    return "No puede circular";
  };

  return <div>{renderMessage()}</div>;
}

export default NormalResult;
