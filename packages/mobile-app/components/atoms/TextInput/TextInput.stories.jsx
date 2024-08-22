import React from "react";
import { storiesOf } from "@storybook/react-native";
import { View } from "react-native";
import TextInput from ".";

storiesOf("TextInput", module)
  .add("Standard", () => (
    <View style={{ margin: 80 }}>
      <TextInput placeholder="This is a default" />
    </View>
  ))
  .add("Errored", () => (
    <View style={{ margin: 80 }}>
      <TextInput
        placeholder="This is a default"
        errorMessage="An error has occurred"
      />
    </View>
  ));
