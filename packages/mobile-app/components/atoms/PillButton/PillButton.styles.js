import styled from "styled-components/native";
import { Button } from "react-native-paper";
import { StyledText } from "../StyledText";

export const StyledButton = styled(Button)`
  border-radius: 45px;
`;

export const PrimaryButton = styled(StyledButton)`
  background-color: ${({ primaryColor, theme }) =>
    primaryColor ?? theme.colors.green};
`;

export const nonPrimaryButton = styled(StyledButton)`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const SecondaryButton = styled(nonPrimaryButton)``;

export const TertiaryButton = styled(nonPrimaryButton)`
  border: ${({ selected, theme }) =>
    selected ? theme.colors.green : "#333333"};
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.greenWithOpacity : theme.colors.white};
`;

export const QuaternaryButton = styled(nonPrimaryButton)`
  background-color: ${({ theme }) => theme.colors.black};
  border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
`;

export const Text = styled(StyledText)`
  letter-spacing: 0;
`;
