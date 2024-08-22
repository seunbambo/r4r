import React, { useState } from "react";
import { storiesOf } from "@storybook/react-native";
import { RadioButton } from "./RadioButton";
import { theme } from "../../../assets/styles";
import { CenterView } from "../CenterView";

const data = [
  {
    id: 1,
    text: "First",
    value: "first",
  },
  {
    id: 1,
    text: "Second",
    value: "second",
  },
  {
    id: 1,
    text: "Third",
    value: "third",
  },
];

const RadioWrapper = () => {
  const [checked, setChecked] = useState("first");

  const handlePress = (value) => {
    setChecked(value);
    console.log(value);
  };

  return (
    <RadioButton data={data} onValueChange={handlePress} value={checked} />
  );
};

storiesOf("RadioButton", module).add("Radio", () => (
  <CenterView backgroundColor={theme.colors.white}>
    <RadioWrapper />
  </CenterView>
));
