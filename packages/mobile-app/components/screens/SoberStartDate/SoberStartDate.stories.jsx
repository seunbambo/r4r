/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { storiesOf } from "@storybook/react-native";
import { SoberStartDate } from "./SoberStartDate";

storiesOf("SoberStartDate", module).add("Base", () => (
  <SoberStartDate />
));
