import HoyNoCirculaResult from "./HoyNoCirculaResult";
import { render, waitFor } from "@testing-library/react";

describe("Normal Result", () => {
  test("Should answer you can't ride if it is a weekend", () => {
    const plate = "AAA-1111";
    const date = new Date("2021/05/08"); //sat
    const { getByText } = render(
      <HoyNoCirculaResult plate={plate} date={date} />
    );

    const response = getByText("No se puede circular en fines de semana");
    expect(response).toBeInTheDocument();
  });

  test("Should answer you can ride if plate belongs to a commercial, gob, official or region gob", () => {
    const plate = "AXA-1111"; //X -> is official use vehicle
    const date = new Date("2021/05/06"); //thu
    const { getByText } = render(
      <HoyNoCirculaResult plate={plate} date={date} />
    );

    const response = getByText(
      "Puede circular ya que es un vehículo con concesión"
    );
    expect(response).toBeInTheDocument();
  });

  test("Should answer you can ride if hour is between 05:00 and 20:00 on laborable days", async () => {
    const plate = "ABA-1111"; //Plate is not an argument
    const date = new Date("2021/05/06 16:30"); //thu
    const { getByText } = render(
      <HoyNoCirculaResult plate={plate} date={date} />
    );

    await waitFor(() => {
      expect(getByText("Puede circular hasta las 20:00")).toBeInTheDocument();
    });
  });

  test("Should answer you can't ride if is in 'toque de queda' ", async () => {
    const plate = "ABA-1111"; // Plate is not an argument
    const date = new Date("2021/05/06 21:30"); //thu
    const { getByText } = render(
      <HoyNoCirculaResult plate={plate} date={date} />
    );

    await waitFor(() => {
      expect(
        getByText("No puede circular desde las 20:00 hasta las 05:00")
      ).toBeInTheDocument();
    });
  });
});
