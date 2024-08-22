/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { storiesOf } from "@storybook/react-native";
import { ScrollView } from "react-native";
import { Home } from "./Home";

storiesOf("Home", module).add("Base", () => (
  <ScrollView>
    <Home />
  </ScrollView>
));
