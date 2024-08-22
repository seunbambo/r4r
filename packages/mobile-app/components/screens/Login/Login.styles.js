import styled from "styled-components/native";
import BaseTextInput from "../../atoms/TextInput";
import { StyledText } from "../../atoms";

export const Container = styled.View``;

export const TermsAndConditionsWrapper = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 15px;
  justify-content: center;
`;

export const TextClickable = styled.TouchableOpacity``;

export const UnderlineText = styled(StyledText)`
  text-decoration-line: underline;
`;

export const TextInput = styled(BaseTextInput)``;
