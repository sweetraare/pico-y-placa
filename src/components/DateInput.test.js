import React, { useState } from "react";
import { fireEvent, render } from "@testing-library/react";
import App from "../App";

describe("Date input", () => {
  test("If value is empty, error message should be shown", () => {
    const { getByText } = render(<App />);
    const dateEmptyError = getByText(`Debe seleccionar una fecha`);

    expect(dateEmptyError).toBeInTheDocument();
  });
  test("Error message should disapper if a date is added", () => {
    const { getByText, getByLabelText } = render(<App />);
    const dateEmptyError = getByText(`Debe seleccionar una fecha`);
    const dateInput = getByLabelText("Ingrese el día que desea salir");

    fireEvent.change(dateInput, { target: { value: new Date() } });

    expect(dateEmptyError).not.toBeInTheDocument();
  });
});
