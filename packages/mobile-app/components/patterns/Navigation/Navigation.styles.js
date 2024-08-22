import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { StyledText } from "../../atoms/StyledText";

export const Text = styled(StyledText)`
  opacity: ${(props) => (props.isFocused ? 1 : 0.6)};
  margin-top: 6px;
  margin-bottom: 32px;
`;

export const TabButton = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.black};
  border-top-color: ${({ theme }) => theme.colors.green};
  border-top-width: ${({ isFocused }) => (isFocused ? 2 : 0)}px;
  flex: 1;
  height: 90px;
  max-height: 90px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
`;

export const TabRow = styled(View)`
  flex-direction: row;
`;

export const GradientBackground = styled(LinearGradient)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

GradientBackground.defaultProps = {
  locations: [0.2, 0.6],
  colors: ["#181D0A", "#000"],
};

export const FocusedView = styled(View)`
  opacity: ${({ isFocused }) => (isFocused ? 1 : 0.6)};
`;
