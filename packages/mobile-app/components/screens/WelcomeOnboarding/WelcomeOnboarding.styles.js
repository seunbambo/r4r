import { Platform } from "react-native";
import styled from "styled-components/native";
import { StyledText } from "../../atoms";

export const StyledView = styled.View``;

export const StyledImageBackground = styled.ImageBackground`
  height: ${({ height }) => height}px;
  min-height: 100%;
  max-height: 100%;
  width: ${({ width }) => width}px;
  justify-content: flex-end;
  padding: ${Platform.select({ ios: "20px 20px 50px 20px", android: "20px 20px 50px 20px" })};
`;

export const HeadingText = styled(StyledText)`
  margin-bottom: 10px;
`;

export const BodyText = styled(StyledText)`
  margin-bottom: 20px;
`;
