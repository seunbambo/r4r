import styled from "styled-components/native";
import BaseTextInput from "../../atoms/TextInput";

export const TextInput = styled(BaseTextInput)`
  margin-bottom: ${({ theme }) => theme.spacing.xxsmall}px;
`;
