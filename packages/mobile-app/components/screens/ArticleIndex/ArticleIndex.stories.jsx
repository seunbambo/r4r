import React from "react";
import { storiesOf } from "@storybook/react-native";
import { ScrollView } from "react-native";
import { ArticleIndex } from "./ArticleIndex";

storiesOf("ArticleIndex", module).add("Base", () => (
  <ScrollView>
    <ArticleIndex />
  </ScrollView>
));
