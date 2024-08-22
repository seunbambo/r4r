import React from "react";
import { StyledText } from "../StyledText";
import {
  StyledImageBackground,
  StyledInnerView,
  StyledInnerViewText,
  StyledView,
} from "./TextOverImage.styles";

export const TextOverImage = ({
  backgroundImage,
  upperText,
  lowerText,
  padding,
  height,
  upperTextPadding,
  ...rest
}) => {
  return (
    <StyledView {...rest}>
      <StyledImageBackground
        height={height}
        source={backgroundImage}
        resizeMode="cover"
      >
        <StyledInnerView padding={padding}>
          <StyledInnerViewText
            variant="subHeading"
            alignment="center"
            padding={upperTextPadding}
          >
            {upperText}
          </StyledInnerViewText>
          <StyledText alignment="center" opacity="default">
            {lowerText}
          </StyledText>
        </StyledInnerView>
      </StyledImageBackground>
    </StyledView>
  );
};
