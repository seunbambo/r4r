import styled from "styled-components/native";
import { StyledText } from "../../atoms/StyledText";

export const SoberDaysValue = styled(StyledText)`
  font-size: ${({ theme }) => theme.fontSizes.extraextralarge}px;
  font-family: ${({ theme }) => theme.fontFamily.PoppinsBold};
`;

export const SmallText = styled(StyledText)`
  font-size: ${({ theme }) => theme.fontSizes.regular};
  opacity: 0.65;
  margin-bottom: ${({ theme }) => theme.spacing.large}px;
`;
