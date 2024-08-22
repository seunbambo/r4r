import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || `${theme.colors.white}`};
  align-items: center;
  margin: 10px;
  justify-content: center;
`;
