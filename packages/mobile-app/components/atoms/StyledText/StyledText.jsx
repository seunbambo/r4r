import React from "react";
import { capitalize } from "../../../utils/string";
import {
  CustomizedText,
  Heading,
  SuperHeading,
  BigHeading,
  MidHeading,
  SubHeading,
  Title,
  SubTitle,
  Body,
  Small,
  Tiny,
} from "./StyledText.styles";

const Components = {
  Heading,
  SuperHeading,
  BigHeading,
  MidHeading,
  SubHeading,
  Title,
  SubTitle,
  Body,
  Small,
  Tiny,
};

export function StyledText({
  color,
  text,
  fontFamily,
  variant,
  fontWeight,
  opacity,
  alignment,
  caps,
  padding,
  fontSize,
  children,
  maxFontSizeMultiplier,
  ...rest
}) {
  const getText = () => {
    const calculatedVariant = variant || "body";
    const componentToRender = capitalize(calculatedVariant);
    return Components[componentToRender];
  };

  return (
    <CustomizedText
      as={getText()}
      color={color}
      text={text}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      variant={variant}
      opacity={opacity}
      alignment={alignment}
      caps={caps}
      padding={padding}
      fontSize={fontSize}
      maxFontSizeMultiplier={maxFontSizeMultiplier || 1.4}
      {...rest}
    >
      {children}
    </CustomizedText>
  );
}
