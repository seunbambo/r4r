import styled from "styled-components/native";
import { Dimensions } from "react-native";

export const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const RadioView = styled.View`
  width: 100%;
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.greenLight : "rgba(0,0,0,0)"};
  flex-direction: row;
  align-items: center;
  border-radius: ${({ theme }) => theme.spacing.medium}px;
`;
