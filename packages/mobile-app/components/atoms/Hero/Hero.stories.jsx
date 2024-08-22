import React from "react";
import { storiesOf } from "@storybook/react-native";
import { View } from "react-native";
import { Hero, HeroText, Logo, Image, StyledText } from "..";
import { theme } from "../../../assets";

const { borders } = theme;

const Container = ({ children, centered, paddingTop }) => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: `${theme.colors.black}`,
        paddingTop: paddingTop || 0,
        paddingBottom: 15,
        alignItems: centered ? "center" : "flex-start",
      }}
    >
      {children}
    </View>
  );
};

storiesOf("Hero", module)
  .addDecorator((story) => (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      {story()}
    </View>
  ))
  .add("Hero, image only", () => <Hero />)
  .add("Services", () => (
    <Hero>
      <HeroText
        upperText="We're Here to Support You"
        lowerText="Praesent commodo cursus magna, vel scelerisque nisl consectetur et."
      />
    </Hero>
  ))
  .add("Long text", () => (
    <Hero>
      <HeroText
        upperText="We're Here to Support You In Addition To this Long Title Text"
        lowerText="Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."
      />
    </Hero>
  ))
  .add("With top and bottom components", () => (
    <>
      <Hero>
        <Container centered paddingTop={30}>
          <Logo />
        </Container>
        <HeroText
          upperText="We're Here to Support You"
          lowerText="Praesent commodo cursus magna, vel scelerisque nisl consectetur et."
        />
      </Hero>
      <Container>
        <StyledText variant="small" caps="uppercase">
          Who We Are
        </StyledText>
        <Image borderRadius={borders.radius.default} />
        <StyledText variant="title">What is Racing for Recovery?</StyledText>
      </Container>
    </>
  ));
