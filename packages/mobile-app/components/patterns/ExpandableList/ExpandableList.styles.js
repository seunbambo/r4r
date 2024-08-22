import styled from "styled-components/native";
import { StyledText } from "../../atoms/StyledText";

export const MainContainer = styled.View``;

export const ListToggle = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.green};
  padding: ${({ theme }) => theme.spacing.medium}px;
  align-items: center;
  max-height: 60px;
  min-height: 60px;
  margin-bottom: 1px;
`;

export const HeadingText = styled(StyledText)``;
HeadingText.defaultProps = {
  fontWeight: "bold",
};

export const ContentContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.borderSubdark};
  padding: ${({ theme }) => theme.spacing.medium}px;
`;

export const Item = styled.View`
  // margin-bottom: 1px;
`;
