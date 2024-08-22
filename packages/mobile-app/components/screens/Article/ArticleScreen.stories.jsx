/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { storiesOf } from "@storybook/react-native";
import { ArticleScreen } from "./ArticleScreen";

const ArticleScreenWrapper = (itemSlug) => {
  // Params (with the itemSlug) can be passed to the route by the Home Screen
  return <ArticleScreen route={{ params: itemSlug }} />;
};

storiesOf("Article Screen", module).add("Article details", () => (
  <ArticleScreenWrapper itemSlug="article1" />
));
