import React from "react";
import { storiesOf } from "@storybook/react-native";
import { ScrollView } from "react-native";
import { Accomplishments } from "./Accomplishments";

storiesOf("Accomplishments", module).add("Base", () => (
  <ScrollView>
    <Accomplishments
      onCancel={() => {
        console.log("CANCEL PRESSED");
      }}
      onConfirm={(values) => {
        console.log("ON CONFIRM", values);
      }}
    />
  </ScrollView>
));
