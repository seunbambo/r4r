import styled from "styled-components/native";

export const PageContainer = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.black};
  padding-top: ${({ theme }) => theme.spacing.large}px;
`;
