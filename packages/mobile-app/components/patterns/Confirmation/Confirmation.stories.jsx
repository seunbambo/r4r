import React from "react";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { Confirmation } from "./Confirmation";

storiesOf("Confirmation", module).add("confirmation", () => (
  <Confirmation
    text="Are you sure you want to log out?"
    leftButtonText="Cancel"
    rightButtonText="Yes, Log Out"
    onPressLeft={action("Pressed left button!")}
    onPressRight={action("Pressed right button!")}
  />
));
