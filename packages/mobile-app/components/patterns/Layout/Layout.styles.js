import styled from "styled-components/native";
import { Dimensions } from "react-native";

export const Grid = styled.View`
  height: auto;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Col = styled.View`
  width: ${({ width }) =>
    `${width ?? Dimensions.get("window").width / 2}px`};
  margin-right: ${({ theme }) => theme.spacing.medium}px;
  margin-bottom: ${({ theme }) => theme.spacing.medium}px;
`;

export const ScrollView = styled.ScrollView`
  padding-horizontal: 0;
`;

ScrollView.defaultProps = {
  horizontal: true,
};
