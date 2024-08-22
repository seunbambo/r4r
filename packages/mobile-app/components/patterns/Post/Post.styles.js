import styled from "styled-components/native";
import { StyledText } from "../../atoms/StyledText";
import { Image as BaseImage } from "../../atoms/Image";

export const Container = styled.View`
  align-items: ${({ centered }) => (centered ? "center" : "flex-start")};
  justify-content: center;
`;

export const Title = styled(StyledText)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme, variant }) =>
    variant === "large"
      ? theme.fontSizes.medium
      : `${
          variant === "medium" ? theme.fontSizes.regular : theme.fontSizes.small
        }`}px;
  line-height: ${({ theme, variant }) =>
    variant === "large" ? theme.fontSizes.large : theme.fontSizes.medium}px;
  margin-top: ${({ addMargin, theme }) =>
    addMargin ? `${theme.spacing.medium}px` : `${theme.spacing.xsmall}px`};
  text-decoration-line: ${({ underlined }) =>
    underlined ? "underline" : "none"};
  font-family: ${({ theme }) => theme.fontFamily.PoppinsBold};
  ${({ lineHeight }) =>
    lineHeight ? `line-height: ${lineHeight}px;` : "auto;"}
`;

export const SubTitle = styled(Title)`
  opacity: 0.65;
  font-family: ${({ theme }) => theme.fontFamily.Poppins};
`;

export const Image = styled(BaseImage)`
  border-radius: ${({ theme, borderRadius }) =>
    borderRadius ?? `${theme.borders.radius.default}`}px;
  padding: 0;
  margin: 0;
`;
