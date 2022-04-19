import React from "react";
import Key from "../components/Key";
import useCalculator from "../hooks/useCalculator";
import { KeyOptions } from "../types/enums/KeyOptions";
import { KeyTypes } from "../types/enums/KeyTypes";
import "./Calculator.css";

function Calculator() {
  const {
    screenValue,
    handleSelectionOperator,
    handleSelectResult,
    handleSelectNumericKey,
    handleSpecialKeys,
  } = useCalculator();

  return (
    <div>
      <p>Calculator</p>
      <div className="container">
        <div className="keyboard-container">
          <div className="result-screen">{screenValue}</div>
          <Key
            handleSelection={handleSpecialKeys}
            KeyConf={{ option: KeyOptions.AC, type: KeyTypes.SPECIAL }}
          ></Key>
          <Key
            handleSelection={handleSpecialKeys}
            KeyConf={{
              option: KeyOptions.INVERT_SIGNAL,
              type: KeyTypes.SPECIAL,
            }}
          ></Key>
          <Key
            handleSelection={handleSpecialKeys}
            KeyConf={{ option: KeyOptions.PERCENTAGE, type: KeyTypes.SPECIAL }}
          ></Key>
          <Key
            handleSelection={handleSelectionOperator}
            KeyConf={{ option: KeyOptions.DIVISION, type: KeyTypes.SPECIAL }}
          ></Key>

          <Key
            handleSelection={handleSelectNumericKey}
            KeyConf={{ option: KeyOptions.SEVEN, type: KeyTypes.NUMERIC }}
          ></Key>
          <Key
            handleSelection={handleSelectNumericKey}
            KeyConf={{ option: KeyOptions.EIGHT, type: KeyTypes.NUMERIC }}
          ></Key>
          <Key
            handleSelection={handleSelectNumericKey}
            KeyConf={{ option: KeyOptions.NINE, type: KeyTypes.NUMERIC }}
          ></Key>
          <Key
            handleSelection={handleSelectionOperator}
            KeyConf={{
              option: KeyOptions.MULTIPLICATION,
              type: KeyTypes.OPERATION,
            }}
          ></Key>

          <Key
            handleSelection={handleSelectNumericKey}
            KeyConf={{ option: KeyOptions.FOUR, type: KeyTypes.NUMERIC }}
          ></Key>
          <Key
            handleSelection={handleSelectNumericKey}
            KeyConf={{ option: KeyOptions.FIVE, type: KeyTypes.NUMERIC }}
          ></Key>
          <Key
            handleSelection={handleSelectNumericKey}
            KeyConf={{ option: KeyOptions.SIX, type: KeyTypes.NUMERIC }}
          ></Key>
          <Key
            handleSelection={handleSelectionOperator}
            KeyConf={{ option: KeyOptions.MINUS, type: KeyTypes.OPERATION }}
          ></Key>
          <Key
            handleSelection={handleSelectNumericKey}
            KeyConf={{ option: KeyOptions.ONE, type: KeyTypes.NUMERIC }}
          ></Key>
          <Key
            handleSelection={handleSelectNumericKey}
            KeyConf={{ option: KeyOptions.TWO, type: KeyTypes.NUMERIC }}
          ></Key>
          <Key
            handleSelection={handleSelectNumericKey}
            KeyConf={{ option: KeyOptions.THREE, type: KeyTypes.NUMERIC }}
          ></Key>
          <Key
            handleSelection={handleSelectionOperator}
            KeyConf={{ option: KeyOptions.PLUS, type: KeyTypes.OPERATION }}
          ></Key>

          <Key
            handleSelection={handleSelectNumericKey}
            KeyConf={{ option: KeyOptions.ZERO, type: KeyTypes.ZERO }}
          ></Key>
          <Key
            handleSelection={handleSelectNumericKey}
            KeyConf={{ option: KeyOptions.COMMA, type: KeyTypes.NUMERIC }}
          ></Key>
          <Key
            handleSelection={handleSelectResult}
            KeyConf={{ option: KeyOptions.EQUAL, type: KeyTypes.OPERATION }}
          ></Key>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
