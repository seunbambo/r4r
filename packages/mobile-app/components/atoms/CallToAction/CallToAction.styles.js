import styled from "styled-components/native";

export const CallToActionWrapper = styled.View`
  border: 1px solid ${({ theme }) => theme.colors.borderDark};
  border-radius: ${({ theme }) => theme.borders.radius.default}px;
  padding: 30px 60px;
  display: flex;
  align-items: center;
  justify-contents: center;
`;

export const ButtonWrapper = styled.View`
  padding-top: 20px;
  width: 100%;
`;
