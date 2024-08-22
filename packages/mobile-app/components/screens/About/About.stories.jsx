import React from "react";
import { storiesOf } from "@storybook/react-native";
import { ScrollView } from "react-native";
import { About } from "./About";

storiesOf("About", module).add("Base", () => (
  <ScrollView>
    <About />
  </ScrollView>
));
