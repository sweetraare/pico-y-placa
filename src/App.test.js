import { render } from "@testing-library/react";
import App from "./App";

describe("Initial State", () => {
  test("Show elements: Header, plateInput, dateInput and queryButton", () => {
    const { getByText, getByLabelText } = render(<App />);
    const titleText = getByText("Pico y Placa");
    const plateInput = getByLabelText("Ingrese su Placa");
    const dateInput = getByLabelText("Ingrese el día que desea salir");

    expect(titleText).toBeInTheDocument();
    expect(plateInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
  });

  test("Input should be empty", () => {
    const plateInputMask = "___-____";

    const { getByLabelText } = render(<App />);

    const plateInput = getByLabelText("Ingrese su Placa");
    const dateInput = getByLabelText("Ingrese el día que desea salir");

    expect(plateInput.value).toBe(plateInputMask);
    expect(dateInput.value).toBe("");
  });
});
