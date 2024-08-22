import React from "react";
import { StyledImageBackground, StyledView } from "./Hero.styles";

// Assets
import HeroBackgroundImage from "../../../assets/images/hero-background.jpg";

export const Hero = ({ children, ...rest }) => {
  return (
    <StyledView {...rest}>
      <StyledImageBackground source={HeroBackgroundImage} resizeMode="cover">
        {children}
      </StyledImageBackground>
    </StyledView>
  );
};
