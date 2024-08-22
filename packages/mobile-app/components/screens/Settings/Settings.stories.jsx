/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { storiesOf } from "@storybook/react-native";

import { Settings } from "./Settings";

const SettingsWrapper = (itemSlug) => {
  // Params (with the itemSlug) can be passed to the route by the Home Screen
  return (
    <Settings route={{ params: itemSlug }} />
  );
};

storiesOf("Settings", module)
  .add("Settings", () => <SettingsWrapper itemSlug="settings" />);

