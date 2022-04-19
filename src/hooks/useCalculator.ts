import { useState, useEffect } from "react";
import { CalcOperations } from "../types/enums/CalcOperations";
import { KeyOptions } from "../types/enums/KeyOptions";
import { KeyTypes } from "../types/enums/KeyTypes";
import { KeyInterface } from "../types/KeyInterface";
type UseCalculatorProps = {
    screenValue: string
    handleSelectionOperator: (KeyConf: KeyInterface) => void;
    handleSelectResult: () => void;
    handleSelectNumericKey: (KeyConf: KeyInterface) => void;
    handleSpecialKeys: (KeyConf: KeyInterface) => void;
};


export const ERROR_MESSAGE: string = 'ERROR';

function useCalculator(): UseCalculatorProps {
    const [screenValue, setScreenValue] = useState("");
    const [op1, setOp1] = useState<number>(0);
    const [op2, setOp2] = useState<number | undefined>(undefined);
    const [result, setResult] = useState<number | undefined>(undefined);
    const [operator, setOperator] = useState<CalcOperations | undefined>();

    useEffect(() => {
        if (result !== undefined) {
            setScreenValue(result.toString());
            setOp1(result);
            setOp2(undefined);
            setOperator(undefined);
        }
    }, [result]);

    function handleSelectionOperator(KeyConf: KeyInterface): void {
        switch (KeyConf.option) {
            case KeyOptions.DIVISION:
                setOperator(CalcOperations.DIV);
                break;
            case KeyOptions.MINUS:
                setOperator(CalcOperations.SUB);
                break;
            case KeyOptions.MULTIPLICATION:
                setOperator(CalcOperations.MUL);
                break;
            case KeyOptions.PLUS:
                setOperator(CalcOperations.ADD);
                break;
        }

        setScreenValue("");
    }
    function handleSelectResult(): void {
        if (operator !== undefined && op1 && op2) {
            let res = 0;
            switch (operator) {
                case CalcOperations.ADD:
                    res = op1 + op2;
                    break;
                case CalcOperations.DIV:
                    res = op1 / op2;
                    break;
                case CalcOperations.SUB:
                    res = op1 - op2;
                    break;
                case CalcOperations.MUL:
                    res = op1 * op2;
                    break;
            }

            setResult(res);
        }
    }


    function handleSelectNumericKey(KeyConf: KeyInterface): void {

        if (KeyConf.type !== KeyTypes.NUMERIC) {
            setScreenValue(ERROR_MESSAGE);
        } else {
            let screenValueAux = screenValue + KeyConf.option;
            if (KeyConf.option !== KeyOptions.COMMA) {
                if (operator === undefined) {
                    setOp1(parseFloat(screenValueAux));
                } else {
                    setOp2(parseFloat(screenValueAux));
                }
            }

            setScreenValue(screenValueAux);
        }

    }

    function resetCalcState(): void {
        setScreenValue("");
        setOp1(0);
        setOp2(undefined);
        setResult(undefined);
        setOperator(undefined);
    }

    function handleSpecialKeys(KeyConf: KeyInterface): void {
        switch (KeyConf.option) {
            case KeyOptions.AC:
                resetCalcState();
                break;
        }
    }
    return {
        screenValue,
        handleSelectResult,
        handleSelectionOperator,
        handleSelectNumericKey,
        handleSpecialKeys,
    };
}

export default useCalculator;