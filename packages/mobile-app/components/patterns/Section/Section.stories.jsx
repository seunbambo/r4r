/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { storiesOf } from "@storybook/react-native";
import { Text, View } from "react-native";
import { Section } from "./Section";
import CalendarIcon from "../../../assets/images/calendar_icon.png";

storiesOf("Section", module).add("default (primary)", () => (
  <View style={{ padding: 20 }}>
    <Section title="This is the title" titleIconImage={CalendarIcon}>
      <Text style={{ color: "#FFF" }}>
        This is the element that lives inside the section
      </Text>
    </Section>
  </View>
));
