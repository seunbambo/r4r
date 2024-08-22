import styled from "styled-components/native";
import { TextInput as InputBase } from "react-native-paper";
import { HelperText } from "react-native-paper";

export const StyledTextInput = styled(InputBase)`
  background-color: ${({ theme }) => theme.colors.borderDark};
  border-color: ${({ theme, hasError }) =>
    hasError ? theme.colors.error : theme.colors.borderLight};
  border-bottom-width: 1px;
  border-width: ${({ theme, hasError }) => (hasError ? 1 : 0)}px;
  padding: ${({ theme }) => theme.spacing.medium}px;
  height: 30px;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.regular}px;
`;

export const ErrorHelperText = styled(HelperText)`
  background-color: ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.white};
  padding-left: ${({ theme }) => theme.spacing.small}px;
  position: relative;
  left: 10px;
  top: -14px;
  margin-right: 10px;
`;
