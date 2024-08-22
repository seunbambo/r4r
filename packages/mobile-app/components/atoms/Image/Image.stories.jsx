import React from "react";
import { storiesOf } from "@storybook/react-native";
import { boolean, number, select, text } from "@storybook/addon-knobs";
import { CenterView, Image } from "..";
import { theme } from "../../../assets/styles";
import BookCallout from "../../../assets/images/bookCallout1x.png";
import PlayIcon from "../../../assets/images/play1x.png";
import R4rLogoWhite1x from "../../../assets/images/r4rLogoWhite1x.png";
import CouncellingServices from "../../../assets/images/councellingServices.jpg";

const { colors, borders } = theme;

const ImageWrapper = (props) => (
  <Image
    borderRadius={number("Add Custom Border Radius", borders.radius.none)}
    withoutBorder={boolean("Without Border", false)}
    padding={number("Add Padding", 0)}
    {...props}
  />
);

storiesOf("Image", module)
  .addDecorator((getStory) => (
    <CenterView backgroundColor={colors.black}>{getStory()}</CenterView>
  ))
  .add("default (with placeholder)", () => <ImageWrapper />)
  .add("large square, book callout", () => (
    <ImageWrapper imageSource={BookCallout} variant="largeSquare" />
  ))
  .add("small square, play icon", () => (
    <Image imageSource={PlayIcon} variant="smallSquare" />
  ))
  .add("custom, R4R logo", () => (
    <ImageWrapper
      description="The Racing for Recovery logo"
      borderRadius={borders.radius.none}
      height={number("Enter Height", 70)}
      imageSource={R4rLogoWhite1x}
      resizeMode={select(
        "Select Resize Mode",
        ["center", "contain", "cover", "repeat", "stretch"],
        "cover",
      )}
      width={number("Enter Width", 70)}
    />
  ))
  .add("full width, info page", () => (
    <ImageWrapper
      imageSource={CouncellingServices}
      variant="fullWidth"
      withoutBorder
    />
  ))
  .add("uri example", () => (
    <ImageWrapper
      imageUri={text(
        "Add an image url",
        "https://reactnative.dev/img/tiny_logo.png",
      )}
      variant="smallSquare"
    />
  ));
