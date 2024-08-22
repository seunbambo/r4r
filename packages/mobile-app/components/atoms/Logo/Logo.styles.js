import { Platform } from "react-native";
import styled from "styled-components/native";
import { StyledText } from "../StyledText";

export const LogoWrapper = styled.View``;

export const LowerText = styled(StyledText)`
  margin-top: ${Platform.select({ ios: "-5px", android: "-12px" })};
`;
