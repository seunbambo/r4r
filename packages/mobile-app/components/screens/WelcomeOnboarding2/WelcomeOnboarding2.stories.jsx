import React from "react";
import { storiesOf } from "@storybook/react-native";
import { ScrollView } from "react-native";
import { WelcomeOnboarding2 } from "./WelcomeOnboarding2";

storiesOf("WelcomeOnboarding2", module).add("Base", () => (
  <ScrollView>
    <WelcomeOnboarding2 />
  </ScrollView>
));
