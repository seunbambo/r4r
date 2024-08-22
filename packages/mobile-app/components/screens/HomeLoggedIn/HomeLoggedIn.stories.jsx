/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { storiesOf } from "@storybook/react-native";
import { ScrollView } from "react-native";

import { HomeLoggedIn } from "./HomeLoggedIn";

storiesOf("HomeLoggedIn", module).add("Base", () => (
  <ScrollView>
    <HomeLoggedIn />
  </ScrollView>
));
