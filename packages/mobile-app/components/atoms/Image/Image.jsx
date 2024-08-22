import React from "react";

// Styles
import {
  StyledImage,
  StyledView,
  LargeContainer,
  SmallContainer,
  DefaultContainer,
  FullWidthContainer,
} from "./Image.styles";

// Assets
import PlaceholderImage from "../../../assets/images/placeholder.png";

export const Image = ({
  borderRadius,
  description,
  height,
  imageUri,
  imageSource,
  padding,
  resizeMode,
  width,
  withoutBorder,
  variant,
  ...rest
}) => {
  const getImageContainer = () => {
    switch (variant) {
      case "largeSquare":
        return LargeContainer;
      case "smallSquare":
        return SmallContainer;
      case "fullWidth":
        return FullWidthContainer;
      default:
        return DefaultContainer;
    }
  };

  return (
    <StyledView
      as={getImageContainer()}
      height={height}
      padding={padding}
      width={width}
      {...rest}
    >
      <StyledImage
        accessibilityLabel={description}
        borderRadius={borderRadius}
        resizeMode={resizeMode}
        source={
          imageSource || (imageUri ? { uri: imageUri } : PlaceholderImage)
        }
        withoutBorder={withoutBorder}
        {...rest}
      />
    </StyledView>
  );
};
