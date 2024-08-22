import styled from "styled-components/native";
import { StyledText } from "../../atoms/StyledText";

export const MainSection = styled.View``;

export const TitleRow = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.medium}px;
`;

export const Title = styled(StyledText)`
  color: ${({ theme, light }) =>
    light ? theme.colors.black : theme.colors.white};
  text-transform: uppercase;
`;

export const Content = styled.View``;

export const Image = styled.Image`
  margin-right: ${({ theme }) => theme.spacing.small}px;
`;
