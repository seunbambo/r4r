import styled from "styled-components/native";
import { Divider } from "react-native-paper";

export const StyledView = styled.View`
  width: ${({ dividerWidth }) => dividerWidth || "100%"};
  padding-top: ${({ paddingTop }) => paddingTop || "5px"};
  padding-bottom: ${({ paddingBottom }) => paddingBottom || "5px"};
`;

export const StyledDivider = styled(Divider)`
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || `${theme.colors.gray}`};
`;

