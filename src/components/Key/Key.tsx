import React from "react";
import { KeyTypes } from "../../types/enums/KeyTypes";
import { KeyInterface } from "../../types/KeyInterface";
import "./Key.css";

type KeyProps = {
  handleSelection: (KeyConf: KeyInterface) => void;
  KeyConf: KeyInterface;
};
function Key({ handleSelection, KeyConf }: KeyProps): JSX.Element {
  let classes = "keyboard-key";

  if (KeyConf.type === KeyTypes.OPERATION) {
    classes += " keyboard-key-op";
  } else if (KeyConf.type === KeyTypes.SPECIAL) {
    classes += "  keyboard-key-special";
  } else if (KeyConf.type === KeyTypes.ZERO) {
    classes += "  special-key-zero";
  }
  return (
    <div className={classes} onClick={() => handleSelection(KeyConf)}>
      {KeyConf.option}
    </div>
  );
}

export default Key;
