import styled from "styled-components/native";
import { StyledText } from "../../atoms";
import { Section } from "../../patterns/Section";

export const PaddedSection = styled(Section)`
  margin-top: ${({ theme }) => theme.spacing.xxlarge}px;
`;

export const FounderText = styled(StyledText)`
  padding-left: 10px;
`;

export const BottomSpace = styled.View`
  margin: ${({ theme }) => theme.spacing.small}px;
`;
