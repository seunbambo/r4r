import styled from "styled-components/native";

export const ArticleWrapper = styled.View`
  padding: ${({ padding }) => `${!padding ? 10 : padding}px`};
`;
