/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { storiesOf } from "@storybook/react-native";
import { ScrollView } from "react-native";
import { Services } from "./Services";

storiesOf("Services", module).add("Base", () => (
  <ScrollView>
    <Services />
  </ScrollView>
));
