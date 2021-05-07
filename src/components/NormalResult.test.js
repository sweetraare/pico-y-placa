import NormalResult from "./NormalResult";
import { render, waitFor } from "@testing-library/react";

describe("Normal Result", () => {
  test("Should answer you can ride if it is a weekend", () => {
    const plate = "AAA-1111";
    const date = new Date("2021/05/08"); //sat
    const { getByText } = render(<NormalResult plate={plate} date={date} />);

    const response = getByText("Puede circular ya que es fin de semana");
    expect(response).toBeInTheDocument();
  });

  test("Should answer you can ride if plate belongs to a commercial, gob, official or region gob", () => {
    const plate = "AXA-1111"; //X -> is official use vehicle
    const date = new Date("2021/05/06"); //thu
    const { getByText } = render(<NormalResult plate={plate} date={date} />);

    const response = getByText(
      "Puede circular ya que es un vehículo con concesión"
    );
    expect(response).toBeInTheDocument();
  });

  test("Should answer you can ride if hour is out of the pico y placa time range", async () => {
    const plate = "ABA-1111"; //common plate
    const date = new Date("2021/05/06 06:30"); //thu
    const { getByText } = render(<NormalResult plate={plate} date={date} />);

    await waitFor(() => {
      expect(
        getByText(
          "Puede circular ya que está fuera del horario del pico y placa"
        )
      ).toBeInTheDocument();
    });
  });

  test("Should answer you can ride if plate is able that day", async () => {
    const plate = "ABA-1111"; // 1 -> can't ride on mon
    const date = new Date("2021/05/06 08:30"); //thu
    const { getByText } = render(<NormalResult plate={plate} date={date} />);

    await waitFor(() => {
      expect(
        getByText("Puede circular ya que su placa no tiene restricción hoy")
      ).toBeInTheDocument();
    });
  });
});
