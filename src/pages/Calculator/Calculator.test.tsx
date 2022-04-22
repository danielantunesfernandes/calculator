import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Calculator from "./Calculator";
import { KeyOptions } from "../../types/enums/KeyOptions";

describe("Calculator.tsx", () => {
  test("When press a numeric key the value should be presented in the screen", () => {
    render(<Calculator />);
    const screenValueArea = screen.getByTestId("screeValueArea");
    expect(screenValueArea).toBeInTheDocument();

    const keyFive = screen.getByText(KeyOptions.FIVE);
    expect(keyFive).toBeInTheDocument();

    fireEvent.click(keyFive);
    expect(screenValueArea.innerHTML).toBe(KeyOptions.FIVE);

    const keyZero = screen.getByText(KeyOptions.ZERO);
    expect(keyZero).toBeInTheDocument();

    fireEvent.click(keyZero);
    expect(screenValueArea.innerHTML).toBe(KeyOptions.FIVE + KeyOptions.ZERO);
  });

  test("When press a the clear key the value in the screen should be reset", () => {
    render(<Calculator />);
    const screenValueArea = screen.getByTestId("screeValueArea");
    expect(screenValueArea).toBeInTheDocument();

    const keyFive = screen.getByText(KeyOptions.FIVE);
    expect(keyFive).toBeInTheDocument();

    fireEvent.click(keyFive);
    expect(screenValueArea.innerHTML).toBe(KeyOptions.FIVE);

    const keyClear = screen.getByText(KeyOptions.AC);
    expect(keyClear).toBeInTheDocument();

    fireEvent.click(keyClear);
    expect(screenValueArea.innerHTML).toBe("");
  });

  test("When its executed an sum operation the result should be in screen", () => {
    render(<Calculator />);
    const screenValueArea = screen.getByTestId("screeValueArea");
    expect(screenValueArea).toBeInTheDocument();

    const keyFive = screen.getByText(KeyOptions.FIVE);
    expect(keyFive).toBeInTheDocument();

    fireEvent.click(keyFive);
    expect(screenValueArea.innerHTML).toBe(KeyOptions.FIVE);

    const keyPlus = screen.getByText(KeyOptions.PLUS);
    expect(keyPlus).toBeInTheDocument();

    fireEvent.click(keyPlus);
    expect(screenValueArea.innerHTML).toBe("");

    fireEvent.click(keyFive);
    expect(screenValueArea.innerHTML).toBe(KeyOptions.FIVE);

    const keyEqual = screen.getByText(KeyOptions.EQUAL);
    expect(keyEqual).toBeInTheDocument();
    fireEvent.click(keyEqual);
    expect(screenValueArea.innerHTML).toBe("10");
  });

  test("When its executed an division operation the result should be in screen", () => {
    render(<Calculator />);
    const screenValueArea = screen.getByTestId("screeValueArea");
    expect(screenValueArea).toBeInTheDocument();

    const keyFive = screen.getByText(KeyOptions.FIVE);
    expect(keyFive).toBeInTheDocument();

    fireEvent.click(keyFive);
    expect(screenValueArea.innerHTML).toBe(KeyOptions.FIVE);

    const keyDivision = screen.getByText(KeyOptions.DIVISION);
    expect(keyDivision).toBeInTheDocument();

    fireEvent.click(keyDivision);
    expect(screenValueArea.innerHTML).toBe("");

    fireEvent.click(keyFive);
    expect(screenValueArea.innerHTML).toBe(KeyOptions.FIVE);

    const keyEqual = screen.getByText(KeyOptions.EQUAL);
    expect(keyEqual).toBeInTheDocument();
    fireEvent.click(keyEqual);
    expect(screenValueArea.innerHTML).toBe("1");
  });

  test("When its executed an subtraction operation the result should be in screen", () => {
    render(<Calculator />);
    const screenValueArea = screen.getByTestId("screeValueArea");
    expect(screenValueArea).toBeInTheDocument();

    const keyFive = screen.getByText(KeyOptions.FIVE);
    expect(keyFive).toBeInTheDocument();

    fireEvent.click(keyFive);
    expect(screenValueArea.innerHTML).toBe(KeyOptions.FIVE);

    const keySub = screen.getByText(KeyOptions.MINUS);
    expect(keySub).toBeInTheDocument();

    fireEvent.click(keySub);
    expect(screenValueArea.innerHTML).toBe("");

    fireEvent.click(keyFive);
    expect(screenValueArea.innerHTML).toBe(KeyOptions.FIVE);

    const keyEqual = screen.getByText(KeyOptions.EQUAL);
    expect(keyEqual).toBeInTheDocument();
    fireEvent.click(keyEqual);
    expect(screenValueArea.innerHTML).toBe("0");
  });

  test("When its executed an multiplication operation the result should be in screen", () => {
    render(<Calculator />);
    const screenValueArea = screen.getByTestId("screeValueArea");
    expect(screenValueArea).toBeInTheDocument();

    const keyFive = screen.getByText(KeyOptions.FIVE);
    expect(keyFive).toBeInTheDocument();

    fireEvent.click(keyFive);
    expect(screenValueArea.innerHTML).toBe(KeyOptions.FIVE);

    const keyMult = screen.getByText(KeyOptions.MULTIPLICATION);
    expect(keyMult).toBeInTheDocument();

    fireEvent.click(keyMult);
    expect(screenValueArea.innerHTML).toBe("");

    fireEvent.click(keyFive);
    expect(screenValueArea.innerHTML).toBe(KeyOptions.FIVE);

    const keyEqual = screen.getByText(KeyOptions.EQUAL);
    expect(keyEqual).toBeInTheDocument();
    fireEvent.click(keyEqual);
    expect(screenValueArea.innerHTML).toBe("25");
  });

  test("When its pressed equal key without previous select the operator should display the previous value selected", () => {
    render(<Calculator />);
    const screenValueArea = screen.getByTestId("screeValueArea");
    expect(screenValueArea).toBeInTheDocument();

    const keyFive = screen.getByText(KeyOptions.FIVE);
    expect(keyFive).toBeInTheDocument();

    fireEvent.click(keyFive);

    const keyEqual = screen.getByText(KeyOptions.EQUAL);
    expect(keyEqual).toBeInTheDocument();
    fireEvent.click(keyEqual);
    expect(screenValueArea.innerHTML).toBe("5");
  });
});
