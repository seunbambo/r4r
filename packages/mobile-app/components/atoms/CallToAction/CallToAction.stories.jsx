import React from "react";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { CallToAction } from "./CallToAction";
import { CenterView } from "../CenterView";
import { theme } from "../../../assets";

storiesOf("CallToAction", module)
  .addDecorator((story) => (
    <CenterView backgroundColor={theme.colors.black}>{story()}</CenterView>
  ))
  .add("call to action", () => (
    <CallToAction
      text="Is Racing for Recovery right for you?"
      buttonText="Contact Us"
      onPress={action("clicked-text")}
    />
  ));
