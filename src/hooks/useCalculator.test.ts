import React from "react";
import useCalculator, { ERROR_MESSAGE } from './useCalculator';
import { renderHook, act } from '@testing-library/react-hooks';
import { KeyOptions } from "../types/enums/KeyOptions";
import { KeyTypes } from "../types/enums/KeyTypes";



describe('useCalculator', () => {
    test("When hook its initialize the variable screenValue should be an empty string", () => {
        const { result } = renderHook(() => useCalculator());
        expect(result.current.screenValue).toBe("");
    });

    test("When handleSelectNumericKey its called with a key the correspondent value should be in the screenValue variable", () => {
        const { result } = renderHook(() => useCalculator());
        act(() => {
            result.current.handleSelectNumericKey({ option: KeyOptions.EIGHT, type: KeyTypes.NUMERIC });
        })
        expect(result.current.screenValue).toBe(KeyOptions.EIGHT);
    });

    test("When handleSelectNumericKey its called with a same key twice the correspondent value should be in the screenValue variable", () => {
        const { result } = renderHook(() => useCalculator());
        act(() => {
            result.current.handleSelectNumericKey({ option: KeyOptions.EIGHT, type: KeyTypes.NUMERIC });
        })
        expect(result.current.screenValue).toBe(KeyOptions.EIGHT);
        act(() => {
            result.current.handleSelectNumericKey({ option: KeyOptions.EIGHT, type: KeyTypes.NUMERIC });
        })
        expect(result.current.screenValue).toBe(KeyOptions.EIGHT + KeyOptions.EIGHT);
    });

    test("When handleSelectNumericKey its more than one time before select the operator should the screenValue variable have the correspondent number", () => {
        const { result } = renderHook(() => useCalculator());
        act(() => {
            result.current.handleSelectNumericKey({ option: KeyOptions.EIGHT, type: KeyTypes.NUMERIC });
        })
        expect(result.current.screenValue).toBe(KeyOptions.EIGHT);
        act(() => {
            result.current.handleSelectNumericKey({ option: KeyOptions.FOUR, type: KeyTypes.NUMERIC });
        })
        expect(result.current.screenValue).toBe(KeyOptions.EIGHT + KeyOptions.FOUR);
    });

    test("When handleSelectNumericKey its used with the comma key should present the comma in the screen variable", () => {
        const { result } = renderHook(() => useCalculator());
        act(() => {
            result.current.handleSelectNumericKey({ option: KeyOptions.EIGHT, type: KeyTypes.NUMERIC });
        })
        expect(result.current.screenValue).toBe(KeyOptions.EIGHT);
        act(() => {
            result.current.handleSelectNumericKey({ option: KeyOptions.COMMA, type: KeyTypes.NUMERIC });
        })
        expect(result.current.screenValue).toBe(KeyOptions.EIGHT + KeyOptions.COMMA);
        act(() => {
            result.current.handleSelectNumericKey({ option: KeyOptions.FOUR, type: KeyTypes.NUMERIC });
        })
        expect(result.current.screenValue).toBe(KeyOptions.EIGHT + KeyOptions.COMMA + KeyOptions.FOUR);
    });

    test("When handleSelectNumericKey its used with the not numeric key should present the error message in the screen variable", () => {
        const { result } = renderHook(() => useCalculator());
        act(() => {
            result.current.handleSelectNumericKey({ option: KeyOptions.DIVISION, type: KeyTypes.SPECIAL });
        })
        expect(result.current.screenValue).toBe(ERROR_MESSAGE);

    });

    test("When operator DIV its selected with handleSelectionOperator the screenValue variable should be with empty string", () => {
        const { result } = renderHook(() => useCalculator());
        act(() => {
            result.current.handleSelectNumericKey({ option: KeyOptions.EIGHT, type: KeyTypes.NUMERIC });
        })
        expect(result.current.screenValue).toBe(KeyOptions.EIGHT);

        act(() => {
            result.current.handleSelectionOperator({ option: KeyOptions.DIVISION, type: KeyTypes.SPECIAL });
        })
        expect(result.current.screenValue).toBe("");
    });

    test("When operator MINUS its selected with handleSelectionOperator the screenValue variable should be with empty string", () => {
        const { result } = renderHook(() => useCalculator());
        act(() => {
            result.current.handleSelectNumericKey({ option: KeyOptions.EIGHT, type: KeyTypes.NUMERIC });
        })
        expect(result.current.screenValue).toBe(KeyOptions.EIGHT);

        act(() => {
            result.current.handleSelectionOperator({ option: KeyOptions.MINUS, type: KeyTypes.SPECIAL });
        })
        expect(result.current.screenValue).toBe("");
    });
    test("When operator MUL its selected with handleSelectionOperator the screenValue variable should be with empty string", () => {
        const { result } = renderHook(() => useCalculator());
        act(() => {
            result.current.handleSelectNumericKey({ option: KeyOptions.EIGHT, type: KeyTypes.NUMERIC });
        })
        expect(result.current.screenValue).toBe(KeyOptions.EIGHT);

        act(() => {
            result.current.handleSelectionOperator({ option: KeyOptions.MULTIPLICATION, type: KeyTypes.SPECIAL });
        })
        expect(result.current.screenValue).toBe("");
    });

    test("When operator ADD its selected with handleSelectionOperator the screenValue variable should be with empty string", () => {
        const { result } = renderHook(() => useCalculator());
        act(() => {
            result.current.handleSelectNumericKey({ option: KeyOptions.EIGHT, type: KeyTypes.NUMERIC });
        })
        expect(result.current.screenValue).toBe(KeyOptions.EIGHT);

        act(() => {
            result.current.handleSelectionOperator({ option: KeyOptions.PLUS, type: KeyTypes.SPECIAL });
        })
        expect(result.current.screenValue).toBe("");
    });

    test("when use handleSelectResult to do a sum operation should the result of the operation be in in the screenValue", () => {
        const { result } = renderHook(() => useCalculator());
        act(() => {
            result.current.handleSelectNumericKey({ option: KeyOptions.EIGHT, type: KeyTypes.NUMERIC });
        })
        expect(result.current.screenValue).toBe(KeyOptions.EIGHT);

        act(() => {
            result.current.handleSelectionOperator({ option: KeyOptions.PLUS, type: KeyTypes.SPECIAL });
        })
        expect(result.current.screenValue).toBe("");

        act(() => {
            result.current.handleSelectNumericKey({ option: KeyOptions.EIGHT, type: KeyTypes.NUMERIC });
        })
        expect(result.current.screenValue).toBe(KeyOptions.EIGHT);

        act(() => {
            result.current.handleSelectResult();
        })
        expect(result.current.screenValue).toBe("16");
    });


    test("when use handleSelectResult to do a minus operation should the result of the operation be in in the screenValue", () => {
        const { result } = renderHook(() => useCalculator());
        act(() => {
            result.current.handleSelectNumericKey({ option: KeyOptions.EIGHT, type: KeyTypes.NUMERIC });
        })
        expect(result.current.screenValue).toBe(KeyOptions.EIGHT);

        act(() => {
            result.current.handleSelectionOperator({ option: KeyOptions.MINUS, type: KeyTypes.SPECIAL });
        })
        expect(result.current.screenValue).toBe("");

        act(() => {
            result.current.handleSelectNumericKey({ option: KeyOptions.EIGHT, type: KeyTypes.NUMERIC });
        })
        expect(result.current.screenValue).toBe(KeyOptions.EIGHT);

        act(() => {
            result.current.handleSelectResult();
        })
        expect(result.current.screenValue).toBe("0");
    });

    test("when use handleSelectResult to do a division operation should the result of the operation be in in the screenValue", () => {
        const { result } = renderHook(() => useCalculator());
        act(() => {
            result.current.handleSelectNumericKey({ option: KeyOptions.EIGHT, type: KeyTypes.NUMERIC });
        })
        expect(result.current.screenValue).toBe(KeyOptions.EIGHT);

        act(() => {
            result.current.handleSelectionOperator({ option: KeyOptions.DIVISION, type: KeyTypes.SPECIAL });
        })
        expect(result.current.screenValue).toBe("");

        act(() => {
            result.current.handleSelectNumericKey({ option: KeyOptions.EIGHT, type: KeyTypes.NUMERIC });
        })
        expect(result.current.screenValue).toBe(KeyOptions.EIGHT);

        act(() => {
            result.current.handleSelectResult();
        })
        expect(result.current.screenValue).toBe("1");
    });

    test("when use handleSelectResult to do a multiplication operation should the result of the operation be in in the screenValue", () => {
        const { result } = renderHook(() => useCalculator());
        act(() => {
            result.current.handleSelectNumericKey({ option: KeyOptions.EIGHT, type: KeyTypes.NUMERIC });
        })
        expect(result.current.screenValue).toBe(KeyOptions.EIGHT);

        act(() => {
            result.current.handleSelectionOperator({ option: KeyOptions.MULTIPLICATION, type: KeyTypes.SPECIAL });
        })
        expect(result.current.screenValue).toBe("");

        act(() => {
            result.current.handleSelectNumericKey({ option: KeyOptions.EIGHT, type: KeyTypes.NUMERIC });
        })
        expect(result.current.screenValue).toBe(KeyOptions.EIGHT);

        act(() => {
            result.current.handleSelectResult();
        })
        expect(result.current.screenValue).toBe("64");
    });

    test("when use handleSelectResult to do a operation without select operators should not change the screenValue variable", () => {
        const { result } = renderHook(() => useCalculator());

        act(() => {
            result.current.handleSelectNumericKey({ option: KeyOptions.EIGHT, type: KeyTypes.NUMERIC });
        })
        expect(result.current.screenValue).toBe(KeyOptions.EIGHT);

        act(() => {
            result.current.handleSelectResult();
        })
        expect(result.current.screenValue).toBe("8");
    });

    test("when use handleSelectResult to do a operation selecting only one operator should not change the screenValue variable", () => {
        const { result } = renderHook(() => useCalculator());

        expect(result.current.screenValue).toBe("");

        act(() => {
            result.current.handleSelectResult();
        })
        expect(result.current.screenValue).toBe("");
    });

    test("when use handleSpecialKeys with the key AC should reset the screenValue variable to empty screen", () => {
        const { result } = renderHook(() => useCalculator());
        act(() => {
            result.current.handleSelectNumericKey({ option: KeyOptions.EIGHT, type: KeyTypes.NUMERIC });
        })
        expect(result.current.screenValue).toBe(KeyOptions.EIGHT);

        act(() => {
            result.current.handleSelectionOperator({ option: KeyOptions.MULTIPLICATION, type: KeyTypes.SPECIAL });
        })
        expect(result.current.screenValue).toBe("");

        act(() => {
            result.current.handleSelectNumericKey({ option: KeyOptions.EIGHT, type: KeyTypes.NUMERIC });
        })
        expect(result.current.screenValue).toBe(KeyOptions.EIGHT);

        act(() => {
            result.current.handleSelectResult();
        })
        expect(result.current.screenValue).toBe("64");


        act(() => {
            result.current.handleSpecialKeys({ option: KeyOptions.AC, type: KeyTypes.SPECIAL });
        })

        expect(result.current.screenValue).toBe("");
    });
});