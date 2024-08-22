import styled from "styled-components/native";
import { StyledText } from "../../atoms";
import { Section } from "../../patterns/Section";

export const PaddedSection = styled(Section)`
  margin-top: ${({ theme }) => theme.spacing.large}px;
`;

export const Space = styled.View`
  margin: ${({ theme }) => theme.spacing.small}px;
`;
export const Title = styled(StyledText)`
  margin-top: ${({ theme }) => theme.spacing.large}px;
`;

Title.defaultProps = {
  variant: "title",
};

export const Subtitle = styled(StyledText)`
  opacity: 0.75;
`;

Subtitle.defaultProps = {
  variant: "small",
};
