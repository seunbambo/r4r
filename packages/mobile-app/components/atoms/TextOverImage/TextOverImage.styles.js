import styled from "styled-components/native";
import { StyledText } from "../StyledText";

export const StyledImageBackground = styled.ImageBackground`
  background-position: bottom;
  min-height: ${({ height }) => `${!height ? 180 : height}px`};
  width: 100%;
`;

export const StyledView = styled.View`
  width: 100%;
`;

export const StyledInnerView = styled.View`
  padding: ${({ padding }) => `${!padding ? 40 : padding}px`};
`;

export const StyledInnerViewText = styled(StyledText)`
  ${({ padding }) => `${padding ?? "padding-top: 40px; padding-bottom: 40px;"}`}
`;
