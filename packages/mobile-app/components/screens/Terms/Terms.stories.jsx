import React from "react";
import { storiesOf } from "@storybook/react-native";
import { ScrollView } from "react-native";
import { Terms } from "./Terms";

storiesOf("Terms", module).add("Base", () => (
  <ScrollView>
    <Terms />
  </ScrollView>
));
