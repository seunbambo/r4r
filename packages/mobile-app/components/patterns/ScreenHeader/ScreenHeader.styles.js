import styled from "styled-components/native";
import { Appbar } from "react-native-paper";

export const AppbarHeader = styled(Appbar.Header)`
  margin-top: 20px;
  padding-bottom: 20px;
  background: ${({ theme, backgroundColor }) =>
    `${backgroundColor || theme.colors.black}`};
`;

export const FlexView = styled.View`
  flex: 1;
`;
