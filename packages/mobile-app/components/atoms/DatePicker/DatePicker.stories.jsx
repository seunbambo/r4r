import React from "react";
import { storiesOf } from "@storybook/react-native";
import { View } from "react-native";
import DatePicker from ".";

storiesOf("DatePicker", module).add("Standard", () => (
  <View style={{ margin: 80 }}>
    <DatePicker
      placeholder="This is a default"
      onChange={(value) => {
        console.log("VALUE");
      }}
    />
  </View>
));
