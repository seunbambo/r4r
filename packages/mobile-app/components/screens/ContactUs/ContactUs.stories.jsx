/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { storiesOf } from "@storybook/react-native";
import { ScrollView } from "react-native";
import { ContactUs } from "./ContactUs";

storiesOf("ContactUs", module).add("Base", () => (
  <ScrollView>
    <ContactUs />
  </ScrollView>
));
