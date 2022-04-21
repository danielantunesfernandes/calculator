import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Key from "./Key";
import { KeyOptions } from "../../types/enums/KeyOptions";
import { KeyTypes } from "../../types/enums/KeyTypes";
describe("Key.tsx", () => {
  const handleSelectionFuncSpy = jest.fn();

  const checkKeyClickAction = function (elem: HTMLDivElement) {
    fireEvent.click(elem);
    expect(handleSelectionFuncSpy).toHaveBeenCalled();
  };
  test("When Key component its used with configuration for a key of type operation should render properly, with the correct class and allow to be clicked", () => {
    render(
      <Key
        handleSelection={handleSelectionFuncSpy}
        KeyConf={{ option: KeyOptions.EQUAL, type: KeyTypes.OPERATION }}
      ></Key>
    );

    const keyTextElem = screen.getByText(KeyOptions.EQUAL);
    expect(keyTextElem).toBeInTheDocument();
    const divNode = keyTextElem.closest("div");
    expect(divNode!.className).toBe("keyboard-key keyboard-key-op");
    checkKeyClickAction(divNode!);
  });

  test("When Key component its used with configuration for a key of type numeric should render properly, with the correct class and allow to be clicked", () => {
    render(
      <Key
        handleSelection={handleSelectionFuncSpy}
        KeyConf={{ option: KeyOptions.FIVE, type: KeyTypes.NUMERIC }}
      ></Key>
    );

    const keyTextElem = screen.getByText(KeyOptions.FIVE);
    expect(keyTextElem).toBeInTheDocument();
    const divNode = keyTextElem.closest("div");
    expect(divNode!.className).toBe("keyboard-key");
    checkKeyClickAction(divNode!);
  });

  test("When Key component its used with configuration for a key of type division should render properly, with the correct class and allow to be clicked", () => {
    render(
      <Key
        handleSelection={handleSelectionFuncSpy}
        KeyConf={{ option: KeyOptions.DIVISION, type: KeyTypes.SPECIAL }}
      ></Key>
    );

    const keyTextElem = screen.getByText(KeyOptions.DIVISION);
    expect(keyTextElem).toBeInTheDocument();
    const divNode = keyTextElem.closest("div");
    expect(divNode?.className).toBe("keyboard-key  keyboard-key-special");
  });

  test("When Key component its used with configuration for a key ZERO should render properly, with the correct class and allow to be clicked", () => {
    render(
      <Key
        handleSelection={handleSelectionFuncSpy}
        KeyConf={{ option: KeyOptions.ZERO, type: KeyTypes.ZERO }}
      ></Key>
    );

    const keyTextElem = screen.getByText(KeyOptions.ZERO);
    expect(keyTextElem).toBeInTheDocument();
    const divNode = keyTextElem.closest("div");
    expect(divNode!.className).toBe("keyboard-key  special-key-zero");
    checkKeyClickAction(divNode!);
  });
});
