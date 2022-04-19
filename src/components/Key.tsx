import React from "react";
import { KeyOptions } from "../types/enums/KeyOptions";
import { KeyTypes } from "../types/enums/KeyTypes";
import { KeyInterface } from "../types/KeyInterface";
import "./Key.css";

type KeyProps = {
  // keyOption: KeyOptions,
  handleSelection: (KeyConf: KeyInterface) => void;
  // type?:KeyTypes,
  KeyConf: KeyInterface;
};
function Key({
  // keyOption: keyType,
  handleSelection,
  // type=KeyTypes.NUMERIC,
  KeyConf,
}: KeyProps): JSX.Element {
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
      {KeyConf}
    </div>
  );
}

export default Key;
