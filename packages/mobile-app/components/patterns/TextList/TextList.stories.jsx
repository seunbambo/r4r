/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { storiesOf } from "@storybook/react-native";
import { View } from "react-native";
import { TextList } from "./TextList";

const rowData = [
  {
    id: "1",
    title: "Password",
  },
  {
    id: "2",
    title: "Notification",
  },
  {
    id: "3",
    title: "Set Sober Start Date",
  },
  {
    id: "4",
    title: "Terms Of Service",
  },
  {
    id: "5",
    title: "Log Out",
  },
];

storiesOf("TextList", module)
  .add("Row", () => (
    <View style={{ padding: 20 }}>
      <TextList
        text="Password"
        onPress={() => {
          console.log("Pressed TextList!");
        }}
      />
    </View>
  ))
  .add("Multiple", () => (
    <View>
      {rowData.map(({ id, title }) => {
        return (
          <TextList
            key={id}
            text={title}
            onPress={() => {
              console.log("Pressed ", id);
            }}
          />
        );
      })}
    </View>
  ));
