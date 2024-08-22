import React from "react";
import { storiesOf } from "@storybook/react-native";
import { Resources } from "./Resources";

const ResourcesWrapper = (itemSlug) => {
  // Params (with the itemSlug) can be passed to the route by the Home Screen
  return (
    <Resources route={{ params: itemSlug }} />
  );
};

storiesOf("Resources", module)
  .add("Resources", () => <ResourcesWrapper itemSlug="bookOne" />);
