import React from "react";
import { storiesOf } from "@storybook/react-native";
import { ScrollView } from "react-native";
import { Login } from "./Login";

storiesOf("Login", module).add("Base", () => (
  <ScrollView>
    <Login />
  </ScrollView>
));
