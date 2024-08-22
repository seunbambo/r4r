import styled from "styled-components/native";
import { Section } from "../../patterns/Section";
import BaseTextInput from "../../atoms/TextInput";

export const Container = styled.View``;

export const PaddedSection = styled(Section)`
  margin-top: ${({ theme }) => theme.spacing.xxlarge}px;
`;

export const TextInput = styled(BaseTextInput)`
  margin-bottom: ${({ theme }) => theme.spacing.medium}px;
`;

export const Space = styled.View`
  margin: ${({ theme }) => theme.spacing.medium}px;
`;
