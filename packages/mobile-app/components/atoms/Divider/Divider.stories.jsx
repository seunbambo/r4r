/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { storiesOf } from "@storybook/react-native";
import { Text } from "react-native";
import { Divider } from ".";
import { CenterView } from "../CenterView";
import { theme } from "../../../assets/styles";

const paddingVerticalWide = {
  paddingTop: "10%",
  paddingBottom: "26%",
};

const { colors, dividerSecondary } = theme;

storiesOf("Divider", module)
  .add("default (primary)", () => (
    <CenterView backgroundColor={colors.black}>
      <Divider />
      <Divider />
    </CenterView>
  ))
  .add("secondary (white background)", () => (
    <CenterView>
      <Text>Bananas</Text>
      <Divider {...dividerSecondary} />
      <Text>Oranges</Text>
      <Divider {...dividerSecondary} />
    </CenterView>
  ))
  .add("custom background, width and padding", () => (
    <CenterView>
      <Text>Bananas</Text>
      <Divider
        backgroundColor={colors.dividerDarkGray}
        dividerWidth="90%"
        {...paddingVerticalWide}
      />
      <Text>Oranges</Text>
      <Divider
        backgroundColor={colors.dividerDarkGray}
        dividerWidth="90%"
        {...paddingVerticalWide}
      />
    </CenterView>
  ));
