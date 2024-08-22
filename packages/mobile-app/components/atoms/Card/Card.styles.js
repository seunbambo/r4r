import styled from "styled-components/native";

export const Card = styled.View`
  border-color: ${({ theme }) => theme.colors.borderDark};
  border-width: 1px;
  border-radius: ${({ theme }) => theme.borders.radius.default}px;
  padding: ${({ theme }) => theme.spacing.medium}px;
`;
