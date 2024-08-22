import styled from "styled-components/native";
import { StyledText } from "../../atoms";
import { Section } from "../../patterns/Section";

export const Text = styled(StyledText)`
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.75;
  line-height: 25px;
`;

export const PaddedSection = styled(Section)`
  margin-top: ${({ theme }) => theme.spacing.xxlarge}px;
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

export const Container = styled.View`
  flex: 1;
  height: 100%;
  min-height: 100%;
  background-color: $({theme}) => theme.colors.black;
`;

export const LivestreamContainer = styled.View``;
