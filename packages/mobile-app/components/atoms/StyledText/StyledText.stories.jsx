import React from "react";
import { storiesOf } from "@storybook/react-native";
import { StyledText } from "./StyledText";
import { CenterView } from "../CenterView";
import { theme } from "../../../assets/styles";

storiesOf("StyledText", module)
  .addDecorator((story) => (
    <CenterView backgroundColor={theme.colors.black}>{story()}</CenterView>
  ))
  .add("default (14px)", () => <StyledText>default</StyledText>)
  .add("superHeading (61px)", () => (
    <StyledText variant="superHeading">superHeading</StyledText>
  ))
  .add("bigHeading (42px)", () => (
    <StyledText variant="bigHeading">bigHeading</StyledText>
  ))
  .add("midHeading (35px)", () => (
    <StyledText variant="midHeading">midHeading</StyledText>
  ))
  .add("heading (31px)", () => (
    <StyledText variant="heading">heading</StyledText>
  ))
  .add("subHeading (25px)", () => (
    <StyledText variant="subHeading">subHeading</StyledText>
  ))
  .add("title (21px)", () => <StyledText variant="title">title</StyledText>)
  .add("subTitle (12px)", () => (
    <StyledText variant="subTitle">subTitle</StyledText>
  ))
  .add("body (17px)", () => <StyledText variant="body">body</StyledText>)
  .add("small (12px)", () => <StyledText variant="small">small</StyledText>)
  .add("tiny (10px)", () => <StyledText variant="tiny">tiny</StyledText>)
  .add("with other customizable props", () => (
    <StyledText
      fontWeight="bold"
      opacity="medium"
      alignment="center"
      caps="uppercase"
      padding={20}
    >
      customized
    </StyledText>
  ));
