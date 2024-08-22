import React from "react";
import { storiesOf } from "@storybook/react-native";
import { SwitchButton } from "./SwitchButton";
import { theme } from "../../../assets";

storiesOf("Switch Button", module)
  .add("switch", () => <SwitchButton />)
  .add("custom color", () => <SwitchButton color={theme.colors.error} />)
  .add("disabled", () => <SwitchButton disabled />);
