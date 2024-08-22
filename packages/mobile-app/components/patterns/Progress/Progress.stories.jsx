/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { storiesOf } from "@storybook/react-native";
import { Text, View } from "react-native";
import { Progress } from "./Progress";
import CalendarIcon from "../../../assets/images/calendar_icon.png";

storiesOf("Progress", module).add("default (primary)", () => (
  <View style={{ padding: 20 }}>
    <Progress value={58} maxValue={300} title="Days Sober" />
  </View>
));
