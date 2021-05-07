import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import App from "../App";

describe("Plate input", () => {
  test("If value is empty, error message should be shown", () => {
    const { getByText } = render(<App />);
    const plateEmptyError = getByText(`Debe ingresar una placa válida`);

    expect(plateEmptyError).toBeInTheDocument();
  });

  test("Error message should disapper if a correct plate is added", async () => {
    const { getByText, getByLabelText, queryByText } = render(<App />);
    const plateEmptyError = queryByText(`Debe ingresar una placa válida`);
    const plateInput = getByLabelText("Ingrese su Placa");

    expect(plateEmptyError).toBeInTheDocument();

    fireEvent.change(plateInput, { target: { value: `AAA-1111` } });

    await waitFor(() => {
      expect(
        queryByText("Debe ingresar una palca válida")
      ).not.toBeInTheDocument();
    });
  });
});
