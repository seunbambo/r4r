import React from "react";
import { storiesOf } from "@storybook/react-native";
import { ScrollView } from "react-native";
import { WelcomeOnboarding } from "./WelcomeOnboarding";

storiesOf("WelcomeOnboarding", module).add("Base", () => (
  <ScrollView>
    <WelcomeOnboarding />
  </ScrollView>
));
