import React from "react";
import { theme } from "../../../assets";
import { TouchTargetWrapper } from "../TouchTargetWrapper";

// Styles
import {
  PrimaryButton,
  QuaternaryButton,
  SecondaryButton,
  StyledButton,
  TertiaryButton,
  Text,
} from "./PillButton.styles";

export const PillButton = ({
  children,
  description,
  disabled,
  onPress,
  primaryColor,
  isLarge,
  selected,
  title,
  variant,
  textColor,
  ...rest
}) => {
  const { colors } = theme;
  const getButton = () => {
    if (disabled) {
      return StyledButton;
    }

    switch (variant) {
      case "secondary":
        return SecondaryButton;
      case "tertiary":
        return TertiaryButton;
      case "quaternary":
        return QuaternaryButton;
      default:
        return PrimaryButton;
    }
  };

  const getButtonContent = () => {
    if (children) {
      return children;
    }

    const textVariant = isLarge ? "body" : "small";
    let color;
    if (variant === "secondary" || selected === true) {
      color = colors.green;
    } else if (variant === "tertiary") {
      color = colors.black;
    }

    return (
      <Text
        {...rest}
        color={textColor ?? color}
        fontWeight="bold"
        variant={textVariant}
      >
        {title}
      </Text>
    );
  };

  return (
    <TouchTargetWrapper onPress={onPress}>
      <StyledButton
        as={getButton()}
        accessibilityLabel={description}
        disabled={disabled}
        mode="contained"
        primaryColor={primaryColor}
        selected={selected}
        uppercase={false}
        {...rest}
      >
        {getButtonContent()}
      </StyledButton>
    </TouchTargetWrapper>
  );
};
