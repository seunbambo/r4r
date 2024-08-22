import React from "react";
import { StyledInnerView } from "./HeroText.styles";
import { StyledText } from "../StyledText";

export const HeroText = ({ upperText, lowerText, ...rest }) => {
  return (
    <StyledInnerView>
      <StyledText {...rest} variant="subHeading" alignment="center">
        {upperText}
      </StyledText>
      <StyledText alignment="center" opacity="lighter">
        {lowerText}
      </StyledText>
    </StyledInnerView>
  );
};
