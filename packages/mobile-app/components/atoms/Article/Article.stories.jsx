import React from "react";
import { storiesOf } from "@storybook/react-native";
import { Article } from "./Article";
import { CenterView } from "../CenterView";
import { theme } from "../../../assets";

const text = {
  headingText: "How to Stay Sober: 13 Tips for Your Recovery",
  bodyText: [
    "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec id elit non mi porta gravida at eget metus. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper.",
    "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec id elit non mi porta gravida at eget metus. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper.",
  ],
};

storiesOf("Article", module)
  .addDecorator((story) => (
    <CenterView backgroundColor={theme.colors.black}>{story()}</CenterView>
  ))
  .add("article", () => (
    <Article title={text.headingText} body={text.bodyText} />
  ));
