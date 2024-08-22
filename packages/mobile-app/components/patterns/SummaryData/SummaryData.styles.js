import styled from "styled-components/native";
import { StyledText } from "../../atoms";

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const Title = styled(StyledText)``;
Title.defaultProps = {
  variant: "heading",
};

export const Subtitle = styled(StyledText)`
  opacity: 0.5;
`;

Subtitle.defaultProps = {
  variant: "tiny",
};

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
