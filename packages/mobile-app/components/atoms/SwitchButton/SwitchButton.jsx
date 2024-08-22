import React from "react";
import { theme } from "../../../assets";
import { ButtonWrapper } from "./SwitchButton.styles";

export function SwitchButton({ color, isSwitchOn, onToggleSwitch, ...rest }) {
  return (
    <ButtonWrapper
      {...rest}
      color={color ?? theme.colors.green}
      value={isSwitchOn}
      onValueChange={onToggleSwitch}
    />
  );
}
