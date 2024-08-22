import styled from "styled-components/native";
import { StyledText } from "../../atoms";

export const Row = styled.TouchableOpacity`
  border-bottom-width: ${({ rowReverse }) => (rowReverse ? "0px" : "1px")};
  border-color: ${({ theme }) => theme.colors.borderDark};
  flex-direction: ${({ rowReverse }) => (rowReverse ? "row-reverse" : "row")};
  padding-vertical: ${({ theme }) => theme.spacing.medium}px;
  align-items: center;
`;

export const ImageContainer = styled.View`
  flex-grow: ${({ rowReverse }) => (rowReverse ? 0 : 1)};
`;

export const TitleContainer = styled.View`
  width: ${({ rowReverse }) => (rowReverse ? "82%" : "75%")};
`;

export const Title = styled(StyledText)`
  font-family: ${({ theme }) => theme.fontFamily.PoppinsBold};
  font-size: ${({ theme }) => theme.fontSizes.regular}px;
  margin-bottom: ${({ theme }) => theme.spacing.xsmall}px;
`;

export const Subtitle = styled(StyledText)`
  font-size: ${({ theme }) => theme.fontSizes.regular}px;
  opacity: 0.65;
`;

export const ChevronRight = styled.Image``;
ChevronRight.defaultProps = {
  source: require("../../../assets/images/left-chevron.png"),
  style: { transform: [{ rotate: "180deg" }], width: 30, height: 30 },
};

export const List = styled.ScrollView``;
