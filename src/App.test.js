import { render } from "@testing-library/react";
import App from "./App";

describe("Initial State", () => {
  test("Show elements: Header, plateInput, dateInput and queryButton", () => {
    const { getByText, getByLabelText, getByRole } = render(<App />);
    const titleText = getByText("Pico y Placa");
    const plateInput = getByLabelText("Ingrese su Placa");
    const dateInput = getByLabelText("Ingrese el día que desea salir");
    const queryButton = getByRole("button");

    expect(titleText).toBeInTheDocument();
    expect(plateInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(queryButton).toBeInTheDocument();
  });

  test("Input should be empty", () => {
    const plateInputMask = "___-____";

    const { getByLabelText, getByRole } = render(<App />);

    const plateInput = getByLabelText("Ingrese su Placa");
    const dateInput = getByLabelText("Ingrese el día que desea salir");
    const queryButton = getByRole("button");

    expect(plateInput.value).toBe(plateInputMask);
    expect(dateInput.value).toBe("");
    expect(queryButton).toBeDisabled();
  });
});
