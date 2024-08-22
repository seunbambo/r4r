/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { storiesOf } from "@storybook/react-native";
import { ScrollView, Image } from "react-native";
import { ScheduleList } from "./ScheduleList";

const Play = require("../../../assets/images/play1x.png");

const scheduleData = [
  {
    title: "May, 23",
    id: "one",
    data: [
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
    ],
  },
  {
    title: "May, 24",
    id: "one",
    data: [
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
    ],
  },
];

storiesOf("ScheduleList", module).add("List", () => (
  <ScrollView style={{ flex: 1 }}>
    <ScheduleList
      scheduleData={scheduleData}
      onPress={(value) => {
        console.log("PRESSED", value);
      }}
    />
  </ScrollView>
));
