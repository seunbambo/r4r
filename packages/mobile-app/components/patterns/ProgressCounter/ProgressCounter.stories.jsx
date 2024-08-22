import React from "react";
import { storiesOf } from "@storybook/react-native";
import { ProgressCounter } from "./ProgressCounter";

storiesOf("ProgressCounter", module).add("ProgressCounter", () => (
  <ProgressCounter dueDate={50} />
));
