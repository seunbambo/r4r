import React from "react";
import { TouchableOpacity } from "react-native";
import { Container, Title, Image, SubTitle } from "./Post.styles";

export const Post = ({
  title,
  subtitle,
  variant,
  headingUnderlined,
  centered,
  imageProps,
  onPress,
  borderRadius,
  lineHeight,
  ...rest
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container centered={centered}>
        {imageProps && <Image borderRadius={borderRadius} {...imageProps} />}
        <Title underlined={headingUnderlined} variant={variant} lineHeight={lineHeight} opacity="default"  {...rest}>
          {title}
        </Title>
        {subtitle && <SubTitle>{subtitle}</SubTitle>}
      </Container>
    </TouchableOpacity>
  );
};
