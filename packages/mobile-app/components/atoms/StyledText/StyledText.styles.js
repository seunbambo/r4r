import styled from "styled-components/native";
import { Text } from "react-native-paper";

export const CustomizedText = styled(Text)`
  color: ${({ color, theme }) => `${color ?? theme.colors.white}`};
  text-align: ${({ alignment }) => `${alignment ?? "left"}`};
  text-transform: ${({ caps }) => `${caps ?? "none"}`};
  padding: ${({ padding }) => `${!padding ? "0px" : `${padding}px`}`};
  ${({ fontSize }) => (fontSize ? `font-size: ${fontSize}px;` : "")};
  ${({ fontFamily }) => (fontFamily ? `font-family: ${fontFamily};` : "")};
`;

export const BoldFont = styled(CustomizedText)`
  font-family: ${({ fontFamily }) => `${fontFamily ?? "PoppinsBold"}`};
`;

// We use the font-family to manipulate font weight since font-weight property is not available for this.
export const RegularFont = styled(CustomizedText)`
  font-family: ${({ fontWeight }) =>
    `${
      fontWeight === "bold"
        ? "PoppinsBold"
        : `${fontWeight === "medium" ? "PoppinsMedium" : "Poppins"}`
    }`};
`;

export const SuperHeading = styled(BoldFont)`
  font-size: ${({ theme }) => theme.fontSizes.extralarge}px;
  opacity: ${({ opacity, theme }) =>
    `${!opacity ? theme.fontOpacity.default : theme.fontOpacity[opacity]}`};
`;

export const BigHeading = styled(BoldFont)`
  font-size: ${({ theme }) => theme.fontSizes.xxlarge}px;
  opacity: ${({ opacity, theme }) =>
    `${!opacity ? theme.fontOpacity.default : theme.fontOpacity[opacity]}`};
`;

export const MidHeading = styled(BoldFont)`
  font-size: ${({ theme }) => theme.fontSizes.xlarge}px;
  opacity: ${({ opacity, theme }) =>
    `${!opacity ? theme.fontOpacity.default : theme.fontOpacity[opacity]}`};
`;

export const Heading = styled(BoldFont)`
  font-size: ${({ theme }) => theme.fontSizes.large}px;
  opacity: ${({ opacity, theme }) =>
    `${!opacity ? theme.fontOpacity.default : theme.fontOpacity[opacity]}`};
`;

export const SubHeading = styled(BoldFont)`
  font-size: ${({ theme }) => theme.fontSizes.gutter}px;
  opacity: ${({ opacity, theme }) =>
    `${!opacity ? theme.fontOpacity.default : theme.fontOpacity[opacity]}`};
`;

export const Title = styled(BoldFont)`
  font-size: ${({ theme }) => theme.fontSizes.medium}px;
  opacity: ${({ opacity, theme }) =>
    `${!opacity ? theme.fontOpacity.default : theme.fontOpacity[opacity]}`};
`;

export const SubTitle = styled(RegularFont)`
  font-size: ${({ theme }) => theme.fontSizes.small}px;
  opacity: ${({ opacity, theme }) =>
    `${!opacity ? theme.fontOpacity.light : theme.fontOpacity[opacity]}`};
`;

export const Body = styled(RegularFont)`
  font-size: ${({ theme }) => theme.fontSizes.normal}px;
  opacity: ${({ opacity, theme }) =>
    `${!opacity ? theme.fontOpacity.faint : theme.fontOpacity[opacity]}`};
`;

export const Small = styled(RegularFont)`
  font-size: ${({ theme }) => theme.fontSizes.small}px;
  opacity: ${({ opacity, theme }) =>
    `${!opacity ? theme.fontOpacity.default : theme.fontOpacity[opacity]}`};
`;

export const Tiny = styled(RegularFont)`
  font-size: ${({ theme }) => theme.fontSizes.xsmall}px;
  opacity: ${({ opacity, theme }) =>
    `${!opacity ? theme.fontOpacity.default : theme.fontOpacity[opacity]}`};
`;
