import styled from "styled-components/native";
const background = require("../../../assets/images/countdown_background.png");

export const Container = styled.ImageBackground`
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: ${({ inline }) => (inline ? 16 : 0)}px;
  padding: ${({ theme, inline }) =>
    inline ? theme.spacing.large : theme.spacing.xxlarge}px;
`;

Container.defaultProps = {
  source: background,
};

export const Content = styled.View`
  padding: ${({ theme }) => `0 ${theme.spacing.medium}px`};
`;
