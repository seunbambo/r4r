/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { storiesOf } from "@storybook/react-native";
import { View, Image } from "react-native";
import { IconListItem, IconList } from "./IconList";

const Play = require("../../../assets/images/play1x.png");

const rowData = [
  {
    id: "one",
    title: "Healthy Start",
    subtitle: "7am - 8:30am",
    image: <Image source={Play} />,
  },
  {
    id: "two",
    title: "Intensive Outpatient Groups",
    subtitle: "9am - 11am",
    image: <Image source={Play} />,
  },
  {
    id: "three",
    title: "Staying Alive",
    subtitle: "11am - 1pm",
    image: <Image source={Play} />,
  },
  {
    id: "four",
    title: "Healthy Boundaries",
    subtitle: "1pm - 2pm",
    image: <Image source={Play} />,
  },
  {
    id: "five",
    title: "Intensive Outpatient Groups",
    subtitle: "9am - 11am",
    image: <Image source={Play} />,
  },
];

storiesOf("IconList", module)
  .add("Standalone Row", () => (
    <View style={{ padding: 20 }}>
      <IconListItem
        image={<Image source={Play} />}
        title="Healthy Start"
        subtitle="7am - 8:30am"
        onPress={() => {
          console.log("Press Row!");
        }}
      />
    </View>
  ))
  .add("Reverse Row", () => (
    <View style={{ padding: 20 }}>
      <IconListItem
        image={<Image source={Play} />}
        title="Healthy Start"
        subtitle="7am - 8:30am"
        onPress={() => {
          console.log("Press Row!");
        }}
        showIconRight
      />
    </View>
  ))
  .add("default (primary)", () => (
    <View style={{ padding: 20 }}>
      <IconList
        data={rowData}
        onPress={(id) => {
          console.log("Pressed ", id);
        }}
      />
    </View>
  ));
