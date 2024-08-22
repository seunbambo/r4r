import React from "react";
import { storiesOf } from "@storybook/react-native";
import { Logo } from "./Logo";
import { CenterView } from "../CenterView";
import { theme } from "../../../assets";

storiesOf("Logo", module)
  .addDecorator((story) => (
    <CenterView backgroundColor={theme.colors.black}>{story()}</CenterView>
  ))
  .add("logo", () => <Logo />);
